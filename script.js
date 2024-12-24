const url = 'https://crypto-prices-api.p.rapidapi.com/prices';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '83dc11be13msh70b549bd17644c1p191c70jsn688aa82a7440',
		'x-rapidapi-host': 'crypto-prices-api.p.rapidapi.com'
	}
};
// fetch('https://public-api.birdeye.so/defi/tokenlist?sort_by=v24hUSD&sort_type=desc&offset=0&limit=50&min_liquidity=100', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
let = 0;

document.addEventListener('DOMContentLoaded', async () => {

    const response = await fetch('https://public-api.birdeye.so/defi/tokenlist?sort_by=v24hUSD&sort_type=desc&offset=0&limit=50&min_liquidity=100', options);
    const data = await response.json();

    console.log(data);
    // console.log(data.data.tokens[22].name);
    for (let i = 0; i < 50; i++) {
        console.log(data.data.tokens[i].name + ` ` + i); // 1 2 12 13 
    }

    document.getElementById('solana').innerHTML = `$` + Math.round(data.data.tokens[1].v24hUSD);
    document.getElementById('jupiter').innerHTML = `$` + Math.round(data.data.tokens[2].v24hUSD);
    document.getElementById('usd').innerHTML = `$` + Math.round(data.data.tokens[12].v24hUSD);
    document.getElementById('kima').innerHTML = `$` + Math.round(data.data.tokens[13].v24hUSD);
    if (data.data.tokens[0].v24hUSD > 0) {
        document.getElementById('solana').style.color = 'green';
        document.getElementById('jupiter').style.color = 'green';
        document.getElementById('usd').style.color = 'green';
        document.getElementById('kima').style.color = 'green';
    }
    else {
        document.getElementById('solana').style.color = 'red';
        document.getElementById('jupiter').style.color = 'red';
        document.getElementById('usd').style.color = 'red';
        document.getElementById('kima').style.color = 'red';
    }

});




