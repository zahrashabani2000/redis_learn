const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()
app.use(cors())

/** 
Getting all the photos from json palceholder API
albumId for limiting size of list
*/
app.get("/photos", async (req, res) => {
    const albumId = req.query.albumId
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.come/photos",
        { params: {albumId}}
    )
    res.json(data)
})

// Getting spicific(individual) folder
app.get("/photos/:id", async (req, res) => {
    const {data} = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    )

    res.json(data)
})

app.listen(3000)