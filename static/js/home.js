let cryptosinportfolio = []
let cryptoobjects = []

function getPortfolioData() {
  let id = document.getElementById("main").dataset.id
  fetch(`/api/portfolios/${id}/`)

  .then((res) => {
    return res.json();
  })

  .then((data) => {
    setPortfolioData(data);
  })
}

function getCryptos() {
    fetch('https://api.coinlore.net/api/tickers/')

    .then((res) => {
        return res.json();
    })
    
    .then((data) => {
        items = data.data
        useData(items)
    })
}

function useData(data) {
  const items = data.filter(item => cryptosinportfolio.includes(item.name))
  items.forEach((item) => {
    const getfromportfolio = cryptoobjects.filter(obj => obj.name === item.name)[0]
    let current_value = item.price_usd * getfromportfolio.amount
    console.log(current_value)
  })
}

function setPortfolioData(data) {
  let assets = data.assets
  assets.forEach((asset) => {
     cryptosinportfolio.push(asset.name)
     cryptoobjects.push(asset);
  })
}

getCryptos();
getPortfolioData();