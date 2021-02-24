document.addEventListener('click', event => {
  event.preventDefault()

  showRes()
})



var showRes = () => {
  axios.get(`https://api.boardgameatlas.com/api/search?name=${document.getElementById('game').value}&limit=10&client_id=1rXDU67y2s`)
    .then(res => {
      console.log(res.games)
      let results = document.getElementById("")
      results.innerHTML = `
      <div class="row">
        <p>${res.games}</p>
      </div>
      `
    })
    .catch(err => console.error(err))
}