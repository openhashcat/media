const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546', null, {});

console.log(web3.eth);
