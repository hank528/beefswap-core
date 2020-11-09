// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("BeefswapV2Factory");
  const greeter = await Greeter.deploy('0x25c0F405d71A189352575d1afcD18245c04D85Eb');

  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);
  //Verify & Publish Contract Source Code
  //npx hardhat verify --network ropsten  0x6414C619368c489f59e5477d7c6c356386f24477 "0x25c0F405d71A189352575d1afcD18245c04D85Eb"
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });  