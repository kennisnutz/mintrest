const {ethers} =require('hardhat')

const main= async ()=> {
  const mintrestFactory= await ethers.getContractFactory('MintrestNFT')
  const mintrestNFT= await mintrestFactory.deploy()

  console.log("MintrestNFT contract deployed at: ", mintrestNFT.address)
}

//rinkeby address: 0xfd6b856633137A0a71d0845A99CeD34BC59F6bDb
//harmony address: 0x0890483725cd0729c9c28c27E9faA9E6c73Ef920


main()
.then(()=>process.exit(0))
.catch(error=>{
    console.log('Error in deploying contract >>', error)
    process.exit(1) 
})
