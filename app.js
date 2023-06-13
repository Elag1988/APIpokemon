const express = require("express");
const app = express();


app.get("/", (req, res) => {

    res.send("Mi primer API");
});

app.listen(3000, () => {
    console.log("El servidor esta activo en el puerto 3000");
});

