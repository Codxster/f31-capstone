const express = require('express')
const cors = require('cors')

const myTuun = require('./my.json')

const app = express();

app.use(express.json());
app.use(cors())

const {
    getTracks,
    deleteTrack,
    addTrack
} = require('./controller')

app.get("/api/tuun", (req, res) => {
res.status(200).send(myTuun)
})

app.get(`/api/tuun`, getTracks)
app.delete(`/api/tuun/:id`, deleteTrack)
app.post(`/api/tuun/`, addTrack)

app.listen(4000, () => console.log('server docked at port 4000'))