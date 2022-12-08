const myTuun = require('./my.json')
let globalId = 5

module.exports = {
    getTracks: (req, res) => {
        res.status(200).send(myTuun)
    },

    addTrack: (req, res) => {
        let { album, track, artist, cover } = req.body
        let newTrack = {
            id: globalId,
            track,
            album,
            artist,
            cover
        }
        myTuun.push(newTrack)
        globalId++
        res.status(200).send([myTuun[myTuun.length - 1]])
    },

    deleteTrack: (req, res) => {
        let index = myTuun.findIndex(track => track.id === +req.params.id)
        myTuun.splice(index, 1)
        res.status(200).send(myTuun)
    }
}