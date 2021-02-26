// script for nav bar icon
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// end of script for nav bar

document.addEventListener('click', event => {
  if (event.target.id === 'addWishBtn') {
    console.log("It worked!")
  }
})