const express = require('express')

const app = express()
const port = 8080;

app.get("/", (req, res) => {
    res
        .status(200)
        .contentType("application/html")
        .send(`<h1>Hello, world!</h1>`)
});

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

app.listen(port, () => console.log(`Listening port ${port} - with Express`))