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
    fetch ('https://proxy-itunes-api.glitch.me/search?term=' + searchInput)
    .then(resp => 
        resp.json()
    )
    .then (data => {
        console.log(data)
        for (let song of data.results) {
            displayResults(song)
        }
    })
}




function displayResults(song) {
    let songContainer = document.querySelector(".result-container")
    let songEl = document.createElement("div")
    let title = document.createElement("h3")
    let body = document.createElement("p")
    let picture = document.createElement("img")
    picture.src = song.artworkUrl100
    body.innerHTML = song.artistName
    title.innerHTML = song.trackName
    songEl.className = "song-item"
    songEl.appendChild(picture)
    songEl.appendChild(title)
    songEl.appendChild(body)
    songContainer.appendChild(songEl)
    

}