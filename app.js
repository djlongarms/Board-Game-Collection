// script for nav bar icon
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// end of script for nav bar

// Gets wishlist array from localStorage
let wishList = JSON.parse(localStorage.getItem('wishList')) || []

// Checks to see whether or not the wishList item is present on the page
if(document.getElementById('wishList') !== null) {
  // Cycles through the array of wishlist items
  wishList.forEach(element => {
    // Creates list item, gives it the proper class, then adds game name and a remove button
    let newWishItem = document.createElement("li")
    newWishItem.classList.add("collection-item")
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