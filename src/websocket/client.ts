import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService"
import { UsersService } from "../services/UsersService"
import { MessagesService } from "../services/MessagesService"

interface IParams {
  text: string,
  email: string
}

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService()
  const usersService = new UsersService()
  const messagesService = new MessagesService()

  socket.on("client_first_access", async (params) => {
    let user_id = null
    const { email, text } = params as IParams
    const socket_id = socket.id

    const userExist = await usersService.findByEmail(email);
    if (!userExist) {
      const user = await usersService.create(email)
      await connectionsService.create({
        socket_id,
        user_id: user.id
      })
      user_id = user.id
    } else {
      user_id = userExist.id
      const connection = await connectionsService.findByUserId(userExist.id)
      if (!connection) {
        await connectionsService.create({
          socket_id,
          user_id: userExist.id
        })
      } else {
        connection.socket_id = socket_id
        await connectionsService.create(connection)
      }
    }

    await messagesService.create({
      text, user_id
    })

    const allMessages = await messagesService.listByUser(user_id)
    socket.emit("client_list_all_messages", allMessages)

    const allUsers = await connectionsService.findAllWithoutAdmin()
    io.emit("admin_list_all_users", allUsers)
  })

  socket.on("client_send_to_admin", async (params) => {
    const socket_id = socket.id
    const { text, socket_admin_id } = params
    const { user_id } = await connectionsService.findBySocketID(socket_id)
    const message = await messagesService.create({
      text,
      user_id
    })

    io.to(socket_admin_id).emit("admin_receive_message", {
      message,
      socket_id
    })
  })
})