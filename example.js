//Example Call for Amazon API

const options = {
  method: 'GET',
  url: 'https://amazon-price1.p.rapidapi.com/search',
  params: { keywords: 'Your Text Here', marketplace: 'US' },
  headers: {
    'x-rapidapi-key': '61a01e5c3amsh6da52702734f46ep192513jsncae7f7ec5553',
    'x-rapidapi-host': 'amazon-price1.p.rapidapi.com'
  }
}

axios.request(options)
  .then(response => {
    console.log(response.data[0]);
    })
  .catch(error => {
    console.error(error);
  })


// Example call for Board Game API

axios.get('https://www.boardgameatlas.com/api/search?ids=TAAifFP590&pretty=true&client_id=JLBr5npPhV')
  .then(res => {
    console.log(res)
  })