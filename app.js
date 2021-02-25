// script for nav bar icon++
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
// end of script for nav bar--

// Script for favorites list++



let titleArray = [] || JSON.parse(localStorage.getItem("Game Title"))

document.getElementById('addfavBtn').addEventListener('click', event => {

  event.preventDefault();


  titleArray.forEach(element => {

    let titleElem = document.createElement("li")

    titleElem.textContent = element

    document.getElementById('testTitle').append(titleElem)
  });

  // let favGamesArray = [] || JSON.parse(localStorage.getItem("Game Title"))

  // axios.get('https://www.boardgameatlas.com/api/search?name=monopoly&limit=100&client_id=JLBr5npPhV')
  //   .then(res => {
  //     console.log(res.data.games[0].name)

  //     // favGamesArray.push(res.data.games[0].name)
  //     for (i = 0; i < res.data.games.length; i++) {
  //       favGamesArray.push(res.data.games[i].name)

  //     }

  //     localStorage.setItem("Game Title", JSON.stringify(favGamesArray))


  //     // localStorage.setItem("Game Title", res.data.games[0].name)


  // })




})

// var boardTitles = []
// var nowTitle = "";

// SavFav function created
// function SavFav() {
// savFav = () => {}     This is how u write the function with arrow

// push nowTitle intow boardtitles array
// boardTitles.push(nowTitle);

// convert to string, this needs to happen before local storage
// JSON.stringify(nowTitle);

// store boardtitle under Test title
// localStorage.setItem("Test title", boardTitles);





// }

// retreieve function created
// function retreiveFav() {

// retrieve
// var savedFav = localStorage.getItem("Test title");

// document.getElementById('favList').append(savedFav);
// }

// create event upon click


//   nowTitle = document.getElementById('wishlist').value





  // SavFav();

  // retreiveFav();

