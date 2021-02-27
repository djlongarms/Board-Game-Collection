// script for nav bar icon
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// end of script for nav bar

// Gets wishlist array from localStorage
let wishList = JSON.parse(localStorage.getItem('wishList')) || []

// Listens for the click of an "Add to Wishlist" button
document.addEventListener('click', event => {
  if (event.target.id === 'addWishBtn') {
    wishList.push(event.target.parentNode.childNodes[1].textContent)
    localStorage.setItem('wishList', JSON.stringify(wishList))
  }
})

// Checks to see whether or not the wishList item is present on the page
if (document.getElementById('wishList') !== null) {
  // Cycles through the array of wishlist items
  wishList.forEach(element => {
    // Creates list item, gives it the proper class, then adds game name and a remove button
    let newWishItem = document.createElement("li")
    newWishItem.classList.add("collection-item")
    newWishItem.innerHTML = `${element}<button id="removeWishBtn" type="submit"class="secondary-content">Remove</button>`

    // Appends item to the wishlist on the page
    document.getElementById('wishList').append(newWishItem)
  })
}

// Listens for click on the document of a "Remove" button in the wishlist
document.addEventListener('click', event => {
  // Prevents default
  event.preventDefault()

  // Checks to make sure "remove" button was clicked
  if (event.target.id === "removeWishBtn") {
    // Finds index of the item to be removed in the wishList array, then splices it out
    let index = wishList.indexOf(event.target.parentNode.childNodes[0].data)
    wishList.splice(index, 1)
    console

    // Updates local storage to the new array
    localStorage.setItem('wishList', JSON.stringify(wishList))

    // Removes element from the page
    event.target.parentNode.remove(this)
  }
})


// FAVLIST
// get favlist array
let favlist = JSON.parse(localStorage.getItem('favlist')) || []

// Listen for click of a add to favlist btn
document.addEventListener('click', event => {
  if (event.target.id === 'addfavBtn') {
    favlist.push(event.target.parentNode.childNodes[1].tectContent)
    localStorage.setItem('favList', JSON.stringify(favlist))
  }
})

// check to see if favlist item is present on page
if (document.getElementById('favlist') !== null) {
  // cycle through fav list array
  favlist.forEach(element => {
    // create li, assigns class, add name, add remove btn
    let newFavItem = document.createElement("li")
    newFavItem.classList.add("collection-item")
    newFavItem.innerHTML = `${element}<button id="removeFavBtn" type="submit" class="secondary-content">Remove</button>`

    // appends item to favlist 
    document.getElementById('favList').append(newFavItem)
  })
}

// listen for click of a remove btn in the favlist
document.addEventListener('click', event => {
  // prevent default
  event.preventDefault()

  // checks to make sure remove btn was clicked
  if (event.target.id === "removeFavBtn") {
    // finds index of the item to be removed in the favlist array, then splices it out
    let index = favlist.indexOf(event.target.parentNode.childNodes[0].data)
    favlist.splice(index, 1)

    // updates local storage tot he new array
    localStorage.setItem('favlist', JSON.stringify(favlist))

    // removes element from the page
    event.target.parentNode.remove(this)
  }

})