window.addEventListener('click', e => {
    e.preventDefault();
})


let searchBtn = document.querySelector(".search-button")
searchBtn.addEventListener('click', e => {
    searchRequest()
})


// let appleUrl =
// function searchRequest () {
//     // a fetch to send the search request ? 

// }


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
        // artist.value = "";
        // titlNote.value = "";
    })
}

function clearInputs() {
    const inputs = document.querySelectorAll('input')
    for (let field of inputs) {
      field.value = ''
    }
  }


function displayResults(song) {
    let songContainer = document.querySelector(".result-container")
    let songEl = document.createElement("div")
    let title = document.createElement("h3")
    let artist = document.createElement("p")
    let picture = document.createElement("img")
    // let sound = document.createElement("audio")
    // sound src=
    picture.src = song.artworkUrl100
    artist.innerHTML = song.artistName
    title.innerHTML = song.trackName
    songEl.className = "song-item"
    artist.className = "artist"
    songEl.appendChild(picture)
    songEl.appendChild(artist)
    songEl.appendChild(title)
    songContainer.appendChild(songEl)
    clearInputs()
}

