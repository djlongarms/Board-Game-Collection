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
if(document.getElementById('wishList') !== null) {
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

document.addEventListener('click', event => {
  if(event.target.id === "removeWishBtn") {
    console.log("Working!")
  }
})