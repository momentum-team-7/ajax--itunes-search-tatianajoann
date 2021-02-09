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
        let artistName = data
         console.log(artistName)
    })
}




// function displayResults() {

// }