const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'x-chain': 'solana',
        'X-API-KEY': 'cd811768f7434753b1d85878d8c34196'
    }
};

// fetch('https://public-api.birdeye.so/defi/tokenlist?sort_by=v24hUSD&sort_type=desc&offset=0&limit=50&min_liquidity=100', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
let = 0;

document.addEventListener('DOMContentLoaded', async ()=>{

    const response = await fetch('https://public-api.birdeye.so/defi/tokenlist?sort_by=v24hUSD&sort_type=desc&offset=0&limit=50&min_liquidity=100', options);
    const data = await response.json();
  
    
    console.log(data);
    console.log(data.tokens);




})

