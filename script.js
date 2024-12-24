const url = 'https://public-api.birdeye.so/defi/tokenlist?sort_by=v24hUSD&sort_type=desc&offset=0&limit=50&min_liquidity=100';
const url1 = 'https://public-api.birdeye.so/defi/price?address=';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'x-chain': 'solana',
        'X-API-KEY': 'cd811768f7434753b1d85878d8c34196'
    }
};


document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    let coinName = {
        "solana": data.data.tokens[1].address,
        "jupiter": data.data.tokens[2].address,
        "usd": data.data.tokens[12].address,
        "kima": data.data.tokens[13].address
    }
    const response2 = await fetch(url1 + coinName, options);
    const data2 = await response2.json();
    console.log(data);
    console.log(data2);
    document.getElementById('solana').innerHTML = `$` + Math.round(data.data.tokens[1].v24hUSD);
    document.getElementById('jupiter').innerHTML = `$` + Math.round(data.data.tokens[2].v24hUSD);
    document.getElementById('usd').innerHTML = `$` + Math.round(data.data.tokens[12].v24hUSD);
    document.getElementById('kima').innerHTML = `$` + Math.round(data.data.tokens[13].v24hUSD);


});




// console.log(data.data.tokens[22].name);
//     for (let i = 0; i < 50; i++) {
//         console.log(data.data.tokens[i].name + ` ` + i); // 1 2 12 13
//     }


// //     if (data.data.tokens[0].v24hUSD > 0) {
// //         document.getElementById('solana').style.color = 'green';
// //         document.getElementById('jupiter').style.color = 'green';
// //         document.getElementById('usd').style.color = 'green';
// //         document.getElementById('kima').style.color = 'green';
// //     }
// //     else {
// //         document.getElementById('solana').style.color = 'red';
// //         document.getElementById('jupiter').style.color = 'red';
// //         document.getElementById('usd').style.color = 'red';
// //         document.getElementById('kima').style.color = 'red';
// //     }