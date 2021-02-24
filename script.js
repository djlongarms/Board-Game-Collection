// script for nav bar icon++
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// end of script for nav bar--

// Script for favorites list++

var boardTitles = []
var nowTitle = ["Javier"];

// SavFav function created
function SavFav() {
  // savFav = () => {}     This is how u write the function with arrow

  // store boardtitle under Test title
  localStorage.setItem("Test title", boardTitles);

  // push nowTitle intow boardtitles array
  boardTitles.push(nowTitle);

  // convert to string
  JSON.stringify(nowTitle);
}

// retreieve function created
function retreiveFav() {

  // retrieve
  var savedFav = localStorage.getItem("Test title");

  document.getElementById('favList').append(savedFav);
}

// create event upon click
document.getElementById('addfavBtn').addEventListener('click', event => {
  event.preventDefault();

  nowTitle = document.getElementById('input').value

  SavFav();

  retreiveFav();

})
