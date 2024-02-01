const express = require('express')
const UserModel = require("../models/user.model")

const port = 8080;

const app = express()
app.use(express.json())


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




app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }

})







app.listen(port, () => console.log(`Listening port ${port} - with Express`))