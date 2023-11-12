import XLS20 from "./xls20"
// const XLS20 = require('xls20')


const network = "Devnet"
const seed = "sEdV82hVrg1hYKrPcYtanw6oEypn6VW"
const xls20 = new XLS20(network, seed)
await xls20.connect()
console.log(await xls20.fundWallet())