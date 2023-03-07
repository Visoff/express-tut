const port = 8080

const fs = require("fs")

const express = require("express")
const app = express()

const cors = require("cors")

app.use(cors())


const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const client = new MongoClient("mongodb+srv://admin:admin@cluster0.gepjwtj.mongodb.net/?retryWrites=true&w=majority")
global.mongo;
client.connect().then((e) => {
    global.mongo = e
    console.log("mongo connected")
})

// GET POST DELETE UPDATE ...

global.counter = 0

app.use(express.json())

app.post("/registration", async (req, res) => {
    var body = req.body
    await global.mongo.db("DB").collection("users").insertOne(body)
    res.send("hi")
})

app.get("/counter/", (req, res) => {
    global.counter += 1
    res.send(global.counter.toString())
})

function start() {
    try {
        app.listen(port, () => {
            console.log(`serving on port: ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
