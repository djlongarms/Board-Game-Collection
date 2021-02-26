
// // Script for favorites list++

// let titleArray = [] || JSON.parse(localStorage.getItem("Game Title"))

let boardtitles = JSON.parse(localStorage.getItem("Game Title")) || [];

console.log(boardtitles);
let nowtitle = '';
let displayli = '';



// here is an example title pulled from atlas
titledisplay = () => {
  // access the atlas database
  axios.get('https://www.boardgameatlas.com/api/search?name=scrabble&limit=100&client_id=JLBr5npPhV')

    // display parameters I set
    .then(res => {

      // declare now title as title from API Database
      let nowtitle = (res.data.games[0].name)
      // console log test nowtitle
      console.log(nowtitle)
      // Display title from API data base on HTML displaytitle
      document.getElementById('displaytitle').innerHTML = `<h4>${nowtitle}</h4>`;

      // start the click event 
      document.getElementById('addfavBtn').addEventListener('click', event => {

        event.preventDefault();

        // save game title from API to local storage
        localStorage.setItem("Fav Game Title", nowtitle);
        // stringify data
        JSON.stringify(nowtitle);
        // retrieve data from localsorage
        let nowsavedtitle = localStorage.getItem("Game Title");
        // console lof test nowsavedtitle
        console.log(`this is it ${nowsavedtitle}`);

        // push nowTitle intow boardtitles array
        boardtitles.push(nowtitle).value

        // save title array to localstorage
        localStorage.setItem("Fav Game Title Array", boardtitles);

        // strigify boardtitles
        JSON.stringify(boardtitles);

        // Retreve boardtitles and save retreved info to savedboardtitles
        let savedboardtitles = localStorage.getItem("Fav Game Title Array");

        console.log(`This is also it ${savedboardtitles}`)

        displaytitleli = () => {

          for (i = 0; i < boardtitles.length; i++)
            displayli = boardtitles[i]
        };

        displaytitleli();

        // declaring favElem to = an element <li>
        let favElem = document.createElement('li')

        // giving favElem created a class name of fav-list-item
        favElem.className = 'fav-list-item'

        // favElem will be the array savedboardtitles
        favElem.textContent = displayli;

        // add favElem to fav list id
        document.getElementById('favList').append(favElem)


      })

    })

  // for end of titledisplay function
}

titledisplay();





// start of addfav click event
// document.getElementById('addfavBtn').addEventListener('click', event => {

//   event.preventDefault()
// })

  // axios.get('https://www.boardgameatlas.com/api/search?name=monopoly&limit=100&client_id=JLBr5npPhV')
  //   .then(res => {
  //     console.log(res.data.games[0].name)

  //     let favElem = document.createElement('li')

  //     favElem.className = 'fav-list-item'

  //     favElem.textContent = (res.data.games[0].name)

  //     document.getElementById('favList').append(favElem)

  //     document.getElementById('')

  // SavFav();


  // })



// // SavFav function created
// function SavFav() {
//   // savFav = () => { }     This is how u write the function with arrow

//   // push nowTitle intow boardtitles array
//   boardTitles.push(nowtitle).value;

//   // convert to string, this needs to happen before local storage
//   JSON.stringify(nowtitle);

//   // store boardtitle under Test title
//   localStorage.setItem("Fav titles", nowtitle);
// }



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

