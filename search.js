let searches = JSON.parse(localStorage.getItem('searches')) || []
searches.forEach(searchItem => {
  let newEntry = document.createElement('li')
  newEntry.className = 'collection-item'
  newEntry.textContent = searchItem.name
  document.getElementById('search-history').append(newEntry)
});

document.getElementById('search-btn').addEventListener('click', event => {
  event.preventDefault()

  let newEntry = document.createElement('li')
  newEntry.className = 'collection-item'
  newEntry.textContent = document.getElementById('game').value
  let searchItem = {
    name: document.getElementById('game').value
  }
  searches.push(searchItem)
  localStorage.setItem('searches', JSON.stringify(searches))
  // games.push(gameElem)
  document.getElementById('search-history').append(newEntry)

  showRes()

  document.getElementById('game').value = ''
})



var showRes = () => {
  let input = document.getElementById('game').value

  axios.get(`https://api.boardgameatlas.com/api/search?name=${input}&limit=10&client_id=1rXDU67y2s`)
    .then(res => {
      let gameElem = res.data.games
      console.log(gameElem)
      let results = document.getElementById("resultsDiv")
      let searchResult = results.innerHTML = `
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[0].name}</h5>
            <img src="${gameElem[0].images.small}">
            <p>Max Players: ${gameElem[0].max_players}</p>
            <p>Min Players: ${gameElem[0].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[0].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[1].name}</h5>
            <img src="${gameElem[1].images.small}">
            <p>Max Players: ${gameElem[1].max_players}</p>
            <p>Min Players: ${gameElem[1].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[1].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[2].name}</h5>
            <img src="${gameElem[2].images.small}">
            <p>Max Players: ${gameElem[2].max_players}</p>
            <p>Min Players: ${gameElem[2].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[2].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[3].name}</h5>
            <img src="${gameElem[0].images.small}">
            <p>Max Players: ${gameElem[3].max_players}</p>
            <p>Min Players: ${gameElem[3].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[3].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[4].name}</h5>
            <img src="${gameElem[4].images.small}">
            <p>Max Players: ${gameElem[4].max_players}</p>
            <p>Min Players: ${gameElem[4].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[4].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[5].name}</h5>
            <img src="${gameElem[5].images.small}">
            <p>Max Players: ${gameElem[5].max_players}</p>
            <p>Min Players: ${gameElem[5].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[5].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[6].name}</h5>
            <img src="${gameElem[6].images.small}">
            <p>Max Players: ${gameElem[6].max_players}</p>
            <p>Min Players: ${gameElem[6].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[6].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[7].name}</h5>
            <img src="${gameElem[7].images.small}">
            <p>Max Players: ${gameElem[7].max_players}</p>
            <p>Min Players: ${gameElem[7].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[7].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[8].name}</h5>
            <img src="${gameElem[8].images.small}">
            <p>Max Players: ${gameElem[8].max_players}</p>
            <p>Min Players: ${gameElem[8].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[8].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5>${gameElem[9].name}</h5>
            <img src="${gameElem[9].images.small}">
            <p>Max Players: ${gameElem[9].max_players}</p>
            <p>Min Players: ${gameElem[9].min_players}</p>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[9].description_preview}</p>
          </div>
        </div>
        `
    })
    .catch(err => console.error(err))
}
document.getElementById('clear').addEventListener('click', () => {
  localStorage.removeItem('searches')
  location.reload()
})