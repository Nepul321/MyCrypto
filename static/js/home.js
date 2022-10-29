const cryptosinportfolio = []
const cryptoobjects = []
const refresh_btn = document.getElementById("refresh");

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
  let total = 0
  items.forEach((item) => {
    const getfromportfolio = cryptoobjects.filter(obj => obj.name === item.name)[0]
    let current_value = item.price_usd * getfromportfolio.amount
    total += current_value
    let current_value_formatted = numeral(current_value).format('0,0.00')  
    document.getElementById(`${item.name}`).innerHTML = `Current Value : $${current_value_formatted}`
    let current_price = item.price_usd
    let twenty4hr = item.percent_change_1h
    let onehr = item.percent_change_7d
    let sevend = item.percent_change_24h
    let rank = item.rank
    document.getElementById(`current-price-${item.name}`).innerHTML = `Current Price : $${numeral(current_price).format('0,0.00')}`
    document.getElementById(`rank-${item.name}`).innerHTML = `Rank : ${rank}`
    document.getElementById(`1hr-${item.name}`).innerHTML = `1h% : ${onehr}%`
    document.getElementById(`24hr-${item.name}`).innerHTML = `24h% : ${twenty4hr}%`
    document.getElementById(`7d-${item.name}`).innerHTML = `7d% : ${sevend}%`
    let total_formatted = numeral(total).format('0,0.00')
    document.getElementById(`current-portfolio-value`).innerHTML = `Current Portfolio Value : $${total_formatted}`
  })
}

function setPortfolioData(data) {
  let assets = data.assets
  assets.forEach((asset) => {
     cryptosinportfolio.push(asset.name)
     cryptoobjects.push(asset);
  })
}

function runFunctions() {
  getCryptos();
  getPortfolioData();
}

refresh_btn.addEventListener('click', () => {
  runFunctions();
})

runFunctions();