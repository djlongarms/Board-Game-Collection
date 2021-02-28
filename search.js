//this loads in the search history items upon loading the screens
let searches = JSON.parse(localStorage.getItem('searches')) || []
searches.forEach(searchItem => {
  let newEntry = document.createElement('li')
  newEntry.className = 'collection-item'
  newEntry.textContent = searchItem.name
  document.getElementById('search-history').append(newEntry)
});

document.getElementById('search-btn').addEventListener('click', event => {
  event.preventDefault()
  //adds items to search history for the first time
  let newEntry = document.createElement('li')
  newEntry.className = 'collection-item'
  newEntry.textContent = document.getElementById('game').value
  let searchItem = {
    name: document.getElementById('game').value
  }
  searches.push(searchItem)
  //pushes to local storage
  localStorage.setItem('searches', JSON.stringify(searches))
  // games.push(gameElem)
  document.getElementById('search-history').append(newEntry)

  showRes()

  document.getElementById('game').value = ''
})

//main search function

var showRes = () => {
  let input = document.getElementById('game').value

  axios.get(`https://api.boardgameatlas.com/api/search?name=${input}&limit=10&client_id=1rXDU67y2s`)
    .then(res => {
      let gameElem = res.data.games
      let results = document.getElementById("resultsDiv")
      //updates results div with results from search
      let searchResult = results.innerHTML = `
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[0].name}</h5>
            <img src="${gameElem[0].images.small}">
            <p>Max Players: ${gameElem[0].max_players}</p>
            <p>Min Players: ${gameElem[0].min_players}</p>
             <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[0].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[1].name}</h5>
            <img src="${gameElem[1].images.small}">
            <p>Max Players: ${gameElem[1].max_players}</p>
            <p>Min Players: ${gameElem[1].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[1].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[2].name}</h5>
            <img src="${gameElem[2].images.small}">
            <p>Max Players: ${gameElem[2].max_players}</p>
            <p>Min Players: ${gameElem[2].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[2].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[3].name}</h5>
            <img src="${gameElem[0].images.small}">
            <p>Max Players: ${gameElem[3].max_players}</p>
            <p>Min Players: ${gameElem[3].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[3].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[4].name}</h5>
            <img src="${gameElem[4].images.small}">
            <p>Max Players: ${gameElem[4].max_players}</p>
            <p>Min Players: ${gameElem[4].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[4].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[5].name}</h5>
            <img src="${gameElem[5].images.small}">
            <p>Max Players: ${gameElem[5].max_players}</p>
            <p>Min Players: ${gameElem[5].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[5].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[6].name}</h5>
            <img src="${gameElem[6].images.small}">
            <p>Max Players: ${gameElem[6].max_players}</p>
            <p>Min Players: ${gameElem[6].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[6].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[7].name}</h5>
            <img src="${gameElem[7].images.small}">
            <p>Max Players: ${gameElem[7].max_players}</p>
            <p>Min Players: ${gameElem[7].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[7].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[8].name}</h5>
            <img src="${gameElem[8].images.small}">
            <p>Max Players: ${gameElem[8].max_players}</p>
            <p>Min Players: ${gameElem[8].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[8].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[9].name}</h5>
            <img src="${gameElem[9].images.small}">
            <p>Max Players: ${gameElem[9].max_players}</p>
            <p>Min Players: ${gameElem[9].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" name="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[9].description_preview}</p>
          </div>
        </div>
        `

      // Gets each newly created "Add to Wishlist Button"
      document.getElementsByName('addWishBtn').forEach(element => {
        // Adds event listener for each button
        element.addEventListener('click', event => {
          event.preventDefault()

          wishList.push(event.target.parentNode.childNodes[1].textContent)
          localStorage.setItem('wishList', JSON.stringify(wishList))

          console.log(wishList)
        })
      })
    })
    .catch(err => console.error(err))
}

//deletes search history and reloads page
document.getElementById('clear').addEventListener('click', () => {
  localStorage.removeItem('searches')
  location.reload()
})

document.addEventListener('click', event => {
  //from the updated search results you can click any title to bring up an expanded search entry that contains a bigger picture and an amazon link 
  if (event.target.classList.contains('gameTitle')) {
    let linkInput = event.target.textContent

    console.log(linkInput)
    const options = {
      method: 'GET',
      url: 'https://amazon-price1.p.rapidapi.com/search',
      params: { keywords: linkInput, marketplace: 'US' },
      headers: {
        'x-rapidapi-key': '61a01e5c3amsh6da52702734f46ep192513jsncae7f7ec5553',
        'x-rapidapi-host': 'amazon-price1.p.rapidapi.com'
      }
    }

    axios.request(options)
      .then(response => {
        console.log(linkInput)
        let amzLink = response.data[0].detailPageURL

        axios.get(`https://api.boardgameatlas.com/api/search?name=${linkInput}&limit=10&client_id=1rXDU67y2s`)
          .then(res => {
            console.log(res.data)
            let gameElem = res.data.games
            console.log(gameElem)
            let results = document.getElementById("resultsDiv")
            let searchResult = results.innerHTML = `
        <div class="row">
          <div class="col s12">
          <div><h2 class = "center">${gameElem[0].name}</h2>
          </div>  
            <img class = "centerImg" src="${gameElem[0].images.medium}">
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>  
          </div>
          <div class="col s12">
            ${gameElem[0].description}
            <p>Max Players: ${gameElem[0].max_players}</p>
            <p>Min Players: ${gameElem[0].min_players}</p>
            <p><a href="${amzLink}">${amzLink}</a></p>
          
          </div>
        </div> `
          })
      })
      .catch(error => {
        console.error(error);
      })
  }
  //this function makes search history entries clickable to redo the search
  if (event.target.classList.contains('collection-item')) {
    let redo = event.target.textContent

    axios.get(`https://api.boardgameatlas.com/api/search?name=${redo}&limit=10&client_id=1rXDU67y2s`)
      .then(res => {
        let gameElem = res.data.games
        console.log(gameElem)
        let results = document.getElementById("resultsDiv")
        let searchResult = results.innerHTML = `
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[0].name}</h5>
            <img src="${gameElem[0].images.small}">
            <p>Max Players: ${gameElem[0].max_players}</p>
            <p>Min Players: ${gameElem[0].min_players}</p>
             <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[0].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[1].name}</h5>
            <img src="${gameElem[1].images.small}">
            <p>Max Players: ${gameElem[1].max_players}</p>
            <p>Min Players: ${gameElem[1].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[1].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[2].name}</h5>
            <img src="${gameElem[2].images.small}">
            <p>Max Players: ${gameElem[2].max_players}</p>
            <p>Min Players: ${gameElem[2].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[2].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[3].name}</h5>
            <img src="${gameElem[0].images.small}">
            <p>Max Players: ${gameElem[3].max_players}</p>
            <p>Min Players: ${gameElem[3].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[3].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[4].name}</h5>
            <img src="${gameElem[4].images.small}">
            <p>Max Players: ${gameElem[4].max_players}</p>
            <p>Min Players: ${gameElem[4].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[4].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[5].name}</h5>
            <img src="${gameElem[5].images.small}">
            <p>Max Players: ${gameElem[5].max_players}</p>
            <p>Min Players: ${gameElem[5].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[5].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[6].name}</h5>
            <img src="${gameElem[6].images.small}">
            <p>Max Players: ${gameElem[6].max_players}</p>
            <p>Min Players: ${gameElem[6].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[6].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[7].name}</h5>
            <img src="${gameElem[7].images.small}">
            <p>Max Players: ${gameElem[7].max_players}</p>
            <p>Min Players: ${gameElem[7].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[7].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[8].name}</h5>
            <img src="${gameElem[8].images.small}">
            <p>Max Players: ${gameElem[8].max_players}</p>
            <p>Min Players: ${gameElem[8].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[8].description_preview}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col s3">
            <h5 class = "gameTitle">${gameElem[9].name}</h5>
            <img src="${gameElem[9].images.small}">
            <p>Max Players: ${gameElem[9].max_players}</p>
            <p>Min Players: ${gameElem[9].min_players}</p>
            <button class="btn waves-effect waves-light" type="submit" id="addWishBtn">Add to Wishlist</button>
            <button class="btn waves-effect waves-light" type="submit" id="addfavBtn">Add to Favorites</button>            
          </div>
          <div class="col s9">
            <p>Description:\n${gameElem[9].description_preview}</p>
          </div>
        </div>
        `




      })
      .catch(err => console.error(err))

  }

})