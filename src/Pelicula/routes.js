import express from 'express'
import controller from './controller.js'

const routes = express.Router()

routes.post('/pelicula', controller.handleInsertPeliculaRequest)
routes.get('/pelicula', controller.handleGetPeliculasRequest)
routes.get('/pelicula/:id', controller.handleGetPeliculaByIdRequest)
routes.update('/peliculas/:id', controller.handleUpdatePeliculaByIdRequest)
routes.delete('/pelicula/:id', controller.handleDeletePeliculaByIdRequest)

export default routes