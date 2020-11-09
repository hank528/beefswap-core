var Web3 = require("web3");
//连接到Ganache
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/30bf4bface004c04b0ee6fa05753adca'));

var fs = require("fs");
var data = fs.readFileSync("./artifacts/contracts/BeefswapV2ERC20.sol/BeefswapV2ERC20.json", "utf-8");

//console.log(JSON.parse(data).abi);
//创建合约对象
var contract = new web3.eth.Contract(JSON.parse(data).abi,'0x83e9ad4df79D54e5AE9697Ec61b0653aEE3aa204');

//调用合约的方法
contract.methods.name().call().then(console.log);