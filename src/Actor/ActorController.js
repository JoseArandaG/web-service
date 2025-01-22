import { ObjectId } from "mongodb";
import client from "../common/db.js";
import { Actor } from "./actor.js";

const peliculasCollection = client.db('leasing').collection('peliculas') 
const actorCollection = client.db('leasing').collection('actores')

async function handleInsertActorRequest(req, res) {
    let data = req.body
    let actor = Actor

    actor.idPelicula = data.idPelicula
    actor.nombre = data.nombre
    actor.edad = data.edad
    actor.estaRetirado = data.estaRetirado
    actor.premios = data.premios

    await actorCollection.insertOne(actor)
    .then((data) => {
        if(data === null) return res.status(400).send('Error al guardar registro')
        
        return res.status(201).send(data)
    })
    .catch((e) => { return res.status(500).send({error: e})})
}

async function handleGetActoresRequest(req,res) {
    await actorCollection.find({}).toArray()
    .then((data) => {return res.status(200).send(data)})
    .catch((e) => {return res.status(500).send({error:e})})
}

async function handleGetActorByIdRequest(req, res) {
    let id = req.params.id

    try{
        let oid = ObjectId.createFromHexString(id)

        await actorCollection.findOne({_id: oid})
        .then((data) => {
            if(data === null) return res.status(404).send(data)

            return res.status(200).send(data)
        })
        .catch((e)=>{
            return res.status(500).send({error: e.code})
        })
    }catch(e){
        return res.status(400).send('Id mal formada')
    }
    
}

async function handleGetActoresByPeliculaIdRequest(req,res) {
    const idPelicula = req.params.idPelicula

    try {
        const actor = await actorCollection.find({idPelicula}).toArray()
        if (!actor.length) return res.status(404).send()
        res.status(200).send(actor)
    }catch (e){
        res.status(500).send({error:e.message})
    }
}

export default {
    handleInsertActorRequest,
    handleGetActoresRequest,
    handleGetActorByIdRequest,
    handleGetActoresByPeliculaIdRequest
}