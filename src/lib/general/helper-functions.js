import { BigNumber } from "ethers";
import { Request } from "./https";
import dotenv from 'dotenv'
dotenv.config()

export function setLocalStorage(key, value) {
  window.localStorage.setItem(key, value);
  return true;
}
export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}

export function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function parseCommasPerThousand(str) {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function formatNumber(n) {
  return String(n).replace(/(.)(?=(\d{3})+$)/g, "$1,");
  // "1,234,567,890"
}

export function toDecimal(n, decimal) {
  return BigNumber.from((n * 10 ** decimal).toString());
}
export function convertToDecimal(n, decimal) {
  return n * 10 ** decimal;
}
export function convertWithDecimal(n, decimal) {
  return n / 10 ** decimal;
}
export function convertTokenToCoin(token, crowdsale_rate) {
  // 1LINK -> 0.001 ETH
  return token * crowdsale_rate;
}

export function convertEpochToDate(date_in_secs) {
  var myDate = new Date(date_in_secs * 1000);
  return myDate.toLocaleString(); // 01/10/2020, 10:35:02
}

export function rpcErrors(err) {
  let error = JSON.parse(err.split('.')[1])
  let data;

  switch (error.code) {
    case -32603:
      let msg = error.message;
      let revertError = msg.split("reverted with reason string");
      data = revertError[1];
      break;
    default:
      data = error.message;
      break;
  }
  return { status: true, data };
}


export function TryCatchException(error) {
  let __error;
  if (error?.messages)
    __error = error.messages.errors[0].field + ' : ' + error.messages.errors[0].message
  else
    __error = error.message;

  // return __error;
  return { ok: false, data: __error }
}

export async function convertAmountToUsd(symbol, tokenAmount) {
  // let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=' + symbol;
  let config = {
    headers: {
      'X-CMC_PRO_API_KEY': process.env.REACT_APP_COINMARKET_API_KEY
    }
  }

  let url = 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion?symbol=WMATIC&convert=USD&amount=1';
  let response = await Request.get(url, config)
  if (!response.ok)
    throw new Error('Amount conversion to USD failed!')

  let data = response.data.data.data;
  let tokenDetails;
  if (data.hasOwnProperty(symbol))
    tokenDetails = data[symbol]

  let usdRate = tokenDetails.quote.USD.price;
  return tokenAmount * usdRate
}