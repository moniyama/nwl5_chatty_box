import { httpServer } from './http'
import './websocket/client'

const PORT = 3333
httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
