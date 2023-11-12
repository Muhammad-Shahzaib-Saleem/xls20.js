// import XLS20 from "./xls20";
// import XLS20 from "./xls20";

const XLS20 = require('./xls20');


async function main(){
    const network = "Devnet"
    const seed = "sEdV82hVrg1hYKrPcYtanw6oEypn6VW"
    const xls20 = new XLS20(network, seed)
    
    await xls20.connect()

    const transferFee = 5000 // 5%
    const flags = 9 // Burnable and transferable
    const uri = "ipfs://MeTaDaTaUrIed84ca32c32342eca83d" // Metadata URI
    const mintResponse = await xls20.mint(transferFee, flags, uri)
    console.log(mintResponse)
    
    console.log(await xls20.fundWallet())
}

// async function minNFT(){
// const transferFee = 5000 // 5%
// const flags = 9 // Burnable and transferable
// const uri = "ipfs://MeTaDaTaUrIed84ca32c32342eca83d" // Metadata URI
// const mintResponse = await xls20.mint(transferFee, flags, uri)
// console.log(mintResponse)
// }

main()

// minNFT()