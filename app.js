// script for nav bar icon
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// end of script for nav bar

// Gets wishlist array from localStorage
let wishList = JSON.parse(localStorage.getItem('wishList')) || []

document.addEventListener('click', event => {
  if (event.target.id === 'addWishBtn') {
    wishList.push(event.target.parentNode.childNodes[1].textContent)
    localStorage.setItem('wishList', JSON.stringify(wishList))
  }
})

if(document.getElementById('wishList') !== null) {
  wishList.forEach(element => {
    let newWishItem = document.createElement("h5")
    newWishItem.textContent = element
    document.getElementById('wishList').append(newWishItem)
  })
}