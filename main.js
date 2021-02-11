window.addEventListener('click', e => {
    e.preventDefault();
})
//if search is greater than zero then yield results, else return "no results or w/e"
// let render results function go ahead and handle dom alteration? 
// when you are using the fetch method of making requests, fetch will only return an error
// if you get a 500 error, in the case of a 404 it doesn't give you an error. fetch api provides
// a method that you call on the response response.ok return true if response status code is 200
// in your .then where you are handling the response before you turn it
// into json you can check to see its status code and then you can do something else at that point
// check to see if response is okay and then do something else (insert an element that says oops something went wrong etc)
let searchBtn = document.querySelector(".search-button")
searchBtn.addEventListener('click', e => {
    clearSongs()
    searchRequest()
    
})


function clearSongs() {
    let songs = document.querySelectorAll(".song-item")
    for (let song of songs) {
        song.remove();
    } 
  }

function searchRequest() {
    let searchInput = document.querySelector(".user-search").value
    fetch ('https://itunes.apple.com//search?term=' + searchInput)
    .then(resp => 
        resp.json()
    )
    .then (data => {
        console.log(data)
    if (data.results.length > 0) {
        for (let song of data.results) {
            displayResults(song)
        }
     } else {
            noResult()
        }
      
    })
}

function noResult() {
    let songContainer = document.querySelector(".result-container")
    let zeroResult = document.createElement("div")
    let resultMsg = document.createElement("p")
    resultMsg.innerHTML = "No results found"
    songContainer.appendChild(zeroResult)
    zeroResult.appendChild(resultMsg)

}






function displayResults(song) {
    let songContainer = document.querySelector(".result-container")
    let songEl = document.createElement("div")
    let title = document.createElement("h3")
    let artist = document.createElement("p")
    let picture = document.createElement("img")
    let sound = document.createElement("source")
    let lilBtn = document.createElement("button")
    sound.src = song.previewUrl
    picture.src = song.artworkUrl100
    artist.innerHTML = song.artistName
    title.innerHTML = song.trackName
    lilBtn.innerHTML = "&#9658;"
    songEl.className = "song-item"
    artist.className = "artist"
    songEl.appendChild(sound)
    songEl.appendChild(picture)
    songEl.appendChild(artist)
    songEl.appendChild(title)
    songEl.appendChild(lilBtn)
    songContainer.appendChild(songEl)
    

    lilBtn.addEventListener('click', e => {
        playMusic(e.target.parentElement)
    })
}

function playMusic(song) {
    let audio = document.querySelector("audio")
    console.log(song.firstElementChild)
    audio.src = song.firstElementChild.src

}

