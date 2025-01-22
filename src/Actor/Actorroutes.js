import express from 'express'
import ActorController from './ActorController.js'


const routes = express.Router()

routes.post('/actor', ActorController.handleInsertActorRequest)
routes.get('/actores', ActorController.handleGetActoresRequest)
routes.get('/actor/:id',ActorController.handleGetActorByIdRequest)
routes.get('/actor/:pelicula', ActorController.handleGetActoresByPeliculaIdRequest)

export default routes