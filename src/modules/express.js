const express = require('express')
const UserModel = require("../models/user.model")

const port = 8080;

const app = express()
app.use(express.json())

// Middleware
app.use((req, res, next) => {

    //Run before request be executed
    console.log(`Request type: ${req.method}`)
    console.log(`Content type: ${req.headers["content-type"]}`)


    //Execute request
    next();
})


// GET method ==========
app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({})

        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)

    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findById(id)

        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
//==========//



//POST methods ==========
app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }

})
//==========//



//UPDATE methods ==========
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }

})
//==========//




//DELETE method ==========
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id, req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }

})
//==========//




app.listen(port, () => console.log(`Listening port ${port} - with Express`))