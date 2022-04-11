
import logo from './logo.svg';
import './App.css';
import Wallet from './components/wallet';

const onMainnet = true;//change to true to deploy
const onRinkeby = !onMainnet;

const contractAddressOnRinkeby = "0xd80B07293C85C91A221B0538369994C70fb5cdBe";
const contractAddressOnMainnet = "0x88954a16b93f296d3d993793143e2dcbc32222b2";
const contractAddress = onMainnet ? contractAddressOnMainnet : contractAddressOnRinkeby;

const log = console.log;


const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const alchemyKey = "https://eth-mainnet.alchemyapi.io/v2/" + process.env.REACT_APP_ALCHEMY;
const web3 = createAlchemyWeb3(alchemyKey);
let contractABI = require('./util/contract-abi.json');
export const CollectionContract = new web3.eth.Contract(contractABI, contractAddress);
CollectionContract.handleRevert = true;







function App() {
	return (
		<div className="App">
			<p>Hello, radical-mint!</p>
			<p>Date 2022apr11, Version 24</p>
			<Wallet />
		</div>
	);
}

export default App;

