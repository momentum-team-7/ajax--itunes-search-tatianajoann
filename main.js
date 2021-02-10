window.addEventListener('click', e => {
    e.preventDefault();
})


let searchBtn = document.querySelector(".search-button")
searchBtn.addEventListener('click', e => {
    searchRequest()
    //clearSongs()
})


// function clearSongs() {
//     let songContainer = document.querySelector(".result-container")
//     for (let song of songContainer) {
//       song.value = ""
//     }
//   }

function searchRequest() {
    let searchInput = document.querySelector(".user-search").value
    fetch ('https://itunes.apple.com//search?term=' + searchInput)
    .then(resp => 
        resp.json()
    )
    .then (data => {
        console.log(data)
        for (let song of data.results) {
            displayResults(song)
        }
        //  artist.value = "";
        //  titlNote.value = "";
    })
}

function displayResults(song) {
    let songContainer = document.querySelector(".result-container")
    let songEl = document.createElement("div")
    let title = document.createElement("h3")
    let artist = document.createElement("p")
    let picture = document.createElement("img")
    let sound = document.createElement("source")
    sound.src = song.previewUrl
    picture.src = song.artworkUrl100
    artist.innerHTML = song.artistName
    title.innerHTML = song.trackName
    songEl.className = "song-item"
    artist.className = "artist"
    songEl.appendChild(sound)
    songEl.appendChild(picture)
    songEl.appendChild(artist)
    songEl.appendChild(title)
    songContainer.appendChild(songEl)
    

    songEl.addEventListener('click', e => {
        playMusic(e.target.parentElement)
    })
}

function playMusic(song) {
    let audio = document.querySelector("audio")
    console.log(song.firstElementChild)
    audio.src = song.firstElementChild.src

}

