
// // Script for favorites list++

// let titleArray = [] || JSON.parse(localStorage.getItem("Game Title"))
// var boardTitles = []
// var nowTitle = "";

// SavFav function created
function SavFav() {
  // savFav = () => { }     This is how u write the function with arrow

  // push nowTitle intow boardtitles array
  boardTitles.push(nowTitle);

  // convert to string, this needs to happen before local storage
  JSON.stringify(nowTitle);

  // store boardtitle under Test title
  localStorage.setItem("Test title", boardTitles);
}

titledisplay = () => {

  axios.get('https://www.boardgameatlas.com/api/search?name=monopoly&limit=100&client_id=JLBr5npPhV')
    .then(res => {

      let nowtitle = (res.data.games[0].name)

      console.log(nowtitle)

      document.getElementById('displaytitle').innerHTML = `<h4>${nowtitle}</h4>`;
    })
}

titledisplay();

document.getElementById('addfavBtn').addEventListener('click', event => {

  event.preventDefault()


  axios.get('https://www.boardgameatlas.com/api/search?name=monopoly&limit=100&client_id=JLBr5npPhV')
    .then(res => {
      console.log(res.data.games[0].name)

      let favElem = document.createElement('li')

      favElem.className = 'fav-list-item'

      favElem.textContent = (res.data.games[0].name)

      document.getElementById('favList').append(favElem)

      document.getElementById('')

      SavFav();


    })
})



//   titleArray.forEach(element => {

//     let titleElem = document.createElement("li")

//     titleElem.textContent = element

//     document.getElementById('testTitle').append(titleElem)
//   });

//   // let favGamesArray = [] || JSON.parse(localStorage.getItem("Game Title"))

//   // axios.get('https://www.boardgameatlas.com/api/search?name=monopoly&limit=100&client_id=JLBr5npPhV')
//   //   .then(res => {
//   //     console.log(res.data.games[0].name)

//   //     // favGamesArray.push(res.data.games[0].name)
//   //     for (i = 0; i < res.data.games.length; i++) {
//   //       favGamesArray.push(res.data.games[i].name)

//   //     }

//   //     localStorage.setItem("Game Title", JSON.stringify(favGamesArray))


//   //     // localStorage.setItem("Game Title", res.data.games[0].name)


//   // })




// })






// // }

// // retreieve function created
// // function retreiveFav() {

// // retrieve
// // var savedFav = localStorage.getItem("Test title");

// // document.getElementById('favList').append(savedFav);
// // }

// // create event upon click


// //   nowTitle = document.getElementById('wishlist').value





//   // SavFav();

//   // retreiveFav();

