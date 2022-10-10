const cryptosinportfolio = ['Bitcoin', 'Ethereum']

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

getCryptos();