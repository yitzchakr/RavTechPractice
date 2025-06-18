const api = require('axios')
const baseurl = 'https://api.binance.com/api/v3/ticker/price?symbol='
const printCoinDetails =async(symbol)=>{
  try {
    const result = await api.get(baseurl+symbol);
   console.log(`symbol: ${result.data.symbol} current price ${result.data.price}`)
  }
   catch(err){
    console.log(err)
   };
    
}
printCoinDetails('ETHUSDT' )
