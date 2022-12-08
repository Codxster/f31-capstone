// const form = document.querySelector('#addElements')
const addTrackBtn = document.querySelector('#addTrackBtn')
const deleteBtn = document.querySelector('#deleteTrack')
const getAllTracksBtn = document.querySelector('#getAllTracksBtn')

const baseURL = 'http://localhost:4000'

const getAllTracks = () => {
    axios.get(`${baseURL}/api/tuun`)
    .then((res) => {
        tracksContainer.innerHTML = ''
        displayTrack(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

const addTrack = (body) => {
    axios.post(`${baseURL}/api/tuun`, body)
    .then((res) => {
        tracksContainer.innerHTML = ''
        displayTrack(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
};

const deleteTrack = (id) => {
    axios.delete(`${baseURL}/api/tuun/${id}`)
    .then((res) => {
        tracksContainer.innerHTML = ''
        alert('track deleted')
        displayTrack(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}
    
const submitHandler = (e) => {
    e.preventDefault()

    const album = document.querySelector('#album')
    const artist = document.querySelector('#artist')
    const track = document.querySelector('#track')
    const cover = document.querySelector('#cover')
    

    let bodyObj = {
        album: album.value,
        artist: artist.value,
        track: track.value,
        cover: cover.value
    }

    addTrack(bodyObj)

    album.value = ''
    artist.value = ''
    track.value = ''
    cover.value = ''

}

const createTrackCard = (track) => {
    const tracksContainer = document.querySelector('#tracksContainer')

    const trackCard = document.createElement('div')

    trackCard.classList.add('track-card')

    trackCard.innerHTML = `
    <img alt='album cover image' src=${track.cover} 
    class="track-cover-image"/> 
    
    <p class="album"> ${track.album} </p>
    
    <p class="artist"> ${track.artist} </p>

    <p class="track"> ${track.track} </p>

    <button id="delete" onclick="deleteTrack(${track.id})">DELETE</button>
    `

    tracksContainer.appendChild(trackCard)

}

const displayTrack = (arr) => {
    const tracksContainer = document.querySelector('#tracksContainer')

    tracksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTrackCard(arr[i])
    }
}

addTrackBtn.addEventListener('click', submitHandler)
getAllTracksBtn.addEventListener('click', getAllTracks)
// deleteBtn.addEventListener('click', deleteTrack)

// getAllTracks()






