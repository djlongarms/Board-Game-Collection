//Example Call for Amazon API

document.getElementById("exampleSearchBtn").addEventListener('click', event => {
  event.preventDefault()
  const options = {
    method: 'GET',
    url: 'https://amazon-price1.p.rapidapi.com/search',
    params: { keywords: document.getElementById("search").value, marketplace: 'US' },
    headers: {
      'x-rapidapi-key': '61a01e5c3amsh6da52702734f46ep192513jsncae7f7ec5553',
      'x-rapidapi-host': 'amazon-price1.p.rapidapi.com'
    }
  }

  axios.request(options)
    .then(response => {
      console.log(response.data);
      })
    })
    .catch(error => {
      console.error(error);
    })
})