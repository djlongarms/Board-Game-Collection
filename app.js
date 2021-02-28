// script for nav bar icon
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// end of script for nav bar

// Gets wishlist array from localStorage
let wishList = JSON.parse(localStorage.getItem('wishList')) || []

// Checks to see whether or not the wishList item is present on the page
if (document.getElementById('wishList') !== null) {
  // Cycles through the array of wishlist items
  wishList.forEach(element => {
    // Creates list item, gives it the proper class, then adds game name and a remove button
    let newWishItem = document.createElement("li")
    newWishItem.classList.add("collection-item", "center")
    newWishItem.innerHTML = `${element}<button name="removeWishBtn" type="submit"class="secondary-content">Remove</button>`

    // Appends item to the wishlist on the page
    document.getElementById('wishList').append(newWishItem)
  })
}

// Listens for click on the document of a "Remove" button in the wishlist
document.getElementsByName('removeWishBtn').forEach( element => {
  element.addEventListener('click', event => {
  // Prevents default
    event.preventDefault()

    // Checks to make sure "remove" button was clicked
    if(event.target.name === "removeWishBtn") {
      // Finds index of the item to be removed in the wishList array, then splices it out
      let index = wishList.indexOf(event.target.parentNode.childNodes[0].data)
      wishList.splice(index, 1)
      
      // Updates local storage to the new array
      localStorage.setItem('wishList', JSON.stringify(wishList))

      // Removes element from the page
      event.target.parentNode.remove(this)
    }
  })
})

// Gets the top 
axios.get('https://www.boardgameatlas.com/api/search?gt_price=9.99&limit=100&order_by=popularity&pretty=true&client_id=JLBr5npPhV')
.then(res => {
  let randomIndex = Math.floor(Math.random() * 100)
  let randomGame = document.createElement("li")
  randomGame.classList.add("collection-item")
  randomGame.innerHTML = `
  <p>Name: ${res.data.games[randomIndex].name}</p>
  <p>Price: ${res.data.games[randomIndex].price}</p>
  <p>Description: ${res.data.games[randomIndex].description_preview}</p>
  `
  document.getElementById('trending').append(randomGame)
}) 
.catch(error => console.log(error))


// FAVLIST
// get favList array
let favList = JSON.parse(localStorage.getItem('favList')) || []

// Listen for click of a add to favList btn
document.addEventListener('click', event => {
  if (event.target.id === 'addfavBtn') {
    favList.push(event.target.parentNode.childNodes[1].textContent)
    localStorage.setItem('favList', JSON.stringify(favList))
  }
})

// check to see if favList item is present on page
if (document.getElementById('favList') !== null) {
  // cycle through fav list array
  favList.forEach(element => {
    // create li, assigns class, add name, add remove btn
    let newFavItem = document.createElement("li")
    newFavItem.classList.add("collection-item")
    newFavItem.innerHTML = `${element}<button name="removeFavBtn" type="submit" class="secondary-content">Remove</button>`

    // appends item to favList 
    document.getElementById('favList').append(newFavItem)
  })
}

// listen for click of a remove btn in the favList
document.getElementsByName('removeFavBtn').forEach(element => {
  element.addEventListener('click', event => {
    // prevent default
    event.preventDefault()

    // checks to make sure remove btn was clicked
    if (event.target.name === "removeFavBtn") {
      // finds index of the item to be removed in the favList array, then splices it out
      let index = favList.indexOf(event.target.parentNode.childNodes[0].data)
      favList.splice(index, 1)

      // updates local storage tot he new array
      localStorage.setItem('favList', JSON.stringify(favList))

      // removes element from the page
      event.target.parentNode.remove(this)
    }
  })
})