import logo from './logo.svg';
import './App.css';
import Wallet from './components/wallet';



//this works now
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');


//troublesome area below, trying to get it out of comments
/*
const alchemyKey = "https://eth-mainnet.alchemyapi.io/v2/" + "GetFromEnvironmentVariables";//TODO
const web3 = createAlchemyWeb3(alchemyKey);

let contractABI = require('./contract-abi.json');
// const contractAddress = '0xd80B07293C85C91A221B0538369994C70fb5cdBe';//rinkeby
const contractAddress = '0x88954a16b93f296d3d993793143e2dcbc32222b2';//mainnet

export const CollectionContract = new web3.eth.Contract(contractABI, contractAddress);
CollectionContract.handleRevert = true;
*/



function App() {
	return (
		<div className="App">
			<p>Hello, radical-mint!</p>
			<p>Date 2022apr8, Version 20</p>
			<Wallet />
		</div>
	);
}

export default App;

