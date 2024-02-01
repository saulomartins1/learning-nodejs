const express = require('express')
const UserModel = require("../models/user.model")

const app = express()
const port = 8080;

app.get("/users", (req, res) => {

    const users = [
        {
            name: "User 1",
            email: "user1@email.com",
        },
        {
            name: "User 2",
            email: "user2@email.com",
        },
    ]

    res
        .status(200)
        .json(users);

})

app.post("/users", (req, res) => {
    const user = UserModel.create(req.body);

    res.status(201).json(user)
})







app.listen(port, () => console.log(`Listening port ${port} - with Express`))