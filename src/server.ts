import { httpServer } from './http'
import './websocket/client'
import './websocket/admin'

const PORT = 3333
httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
