let cryptosinportfolio = []

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
  console.log(items)
}

function setPortfolioData(data) {
  let assets = data.assets
  assets.forEach((asset) => {
     cryptosinportfolio.push(asset.name)
  })
}

getCryptos();
getPortfolioData();