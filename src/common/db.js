import { MongoClient, ServerApiVersion } from "mongodb";

const uri = 'mongodb+srv://eva3-express:yrXW9VgQWG2UcBSJ@eva-u3-express.wuomd.mongodb.net/?retryWrites=true&w=majority&appName=eva-u3-express'

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export default client

