const fs = require("fs");
const path = require("path");

// Create fodler
fs.mkdir(path.join(__dirname, "test"), (error) => {
    if (error) return console.log("ERRROR: ", error);

    console.log("Folder created")
})

// Create file
// Write file overwrite if the current file already exist!
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello, world!\n", (error) => {
    if (error) return console.log("DEU RUIM: ", error);

    console.log("Criado com sucesso!")

    // Add content into a existing file;
    fs.appendFile(path.join(__dirname, "/test", "test.txt"), "Hello, world! 5\n", (error) => {
        if (error) return console.log("DEU RUIM: ", error);

        console.log("Adicionado ao arquivo existente com sucesso!")
    });

    // Read file
    fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (error, data) => {
        if (error) return console.log(error);
        return console.log(data);
    })


});

