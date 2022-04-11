

import React from 'react';
import { useEffect, useState } from 'react';
import { isDesktop } from 'react-device-detect';

import logo from './logo.svg';
import './App.css';
//import Wallet from './components/wallet';

/*
import {
	/*
	CollectionContract,
	setActive,
	*/
	/*
	connectWallet,
	mintToken,
	getCurrentWalletConnected,
	myFunFunction
} from './util/interact.js';
*/

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

/*
https://stackoverflow.com/questions/42182577/is-it-possible-to-use-dotenv-in-a-react-project

Sorry for picking up old question, but
react-scripts actually uses dotenv library under the hood.

With react-scripts@0.2.3 and higher, you can work with environment variables this way:

create .env file in the root of the project
set environment variables starting with REACT_APP_ there
access it by process.env.REACT_APP_... in components
*/






var s = myFunFunction();



const Wallet = () => {

	const [ walletAddress, setWallet ] = useState('');
	const [ status, setStatus ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ newMessage, setNewMessage ] = useState('');
	const [ mintQty, setMintQty ] = useState(1);

	//called only once
	useEffect(async () => {
		// const message = await loadCurrentMessage();
		// setMessage(message);

		/*
		addSmartContractListener();
		*/

		const { address, status } = await getCurrentWalletConnected();
		setMessage('Connected to MetaMask');
		setWallet(address);
		setStatus(status);

		addWalletListener();
	}, []);

	/*
	function addSmartContractListener() {
		CollectionContract.events.AssetMinted({}, (error, data) => {
			if (error) {
				setStatus('😥 ' + error.message);
			} else {
				console.log(data);
				setMessage(data.returnValues[1]);
				setNewMessage('');
				setStatus('🎉 Your message has been updated!');
			}
		});
	}
	*/

	function addWalletListener() {
		if (window.ethereum) {
			window.ethereum.on('accountsChanged', (accounts) => {
				if (accounts.length > 0) {
					setWallet(accounts[0]);
					setStatus('Write a message in the text-field above.');
				} else {
					setWallet('');
					setStatus('Connect to Metamask using the top right button.');
				}
			});
		} else {
			setStatus(
				<p>
					<a target="_blank" href={`https://metamask.io`}>You need to install Metamask.</a>
				</p>
			);
		}
	}

	const connectWalletPressed = async () => {
		const walletResponse = await connectWallet();
		setStatus(walletResponse.status);
		setWallet(walletResponse.address);
	};

	const onUpdatePressed = async () => {
		// const { status } = await updateMessage(walletAddress, newMessage);
		// setStatus(status);
	};

	return (
		<div id="constrainer">
			<p>This is the wallet component.</p>
			<div className="container">
				<p>Status: {message}</p>

				<button id="walletButton" onClick={connectWalletPressed}>
					{walletAddress.length > 0 ? (
					'Connected: ' + String(walletAddress).substring(0, 6) + '...' + String(walletAddress).substring(38)
					) : (
					<span>Connect Wallet</span>
					)}
				</button>

				<p id="status">{status}</p>

				<button onClick={() => mintToken(walletAddress, 1).then((message) => { setMessage(message.status); })} >
					Mint NFT
				</button>

			</div>
		</div>
	);
};






export function myFunFunction() {

	console.log("hello from my fun function");
	console.log(process.env.REACT_APP_KEY);
	console.log(process.env.REACT_APP_SECOND_KEY);
	console.log(process.env.REACT_APP_KEY3);
	console.log(process.env.REACT_APP_ALCHEMY.length);
	console.log("^ hopefully you got three environment variables, and a length");

	return "return value";
}

export const getCurrentWalletConnected = async () => {
	if (window.ethereum) {
		try {
			const addressArray = await window.ethereum.request({
				method: 'eth_accounts'
			});
			if (addressArray.length > 0) {
				return {
					address: addressArray[0],
					status: 'Press to claim the next NFT'
				};
			} else {
				return {
					address: '',
					status: 'Connect to Metamask using the top right button.'
				};
			}
		} catch (err) {
			return {
				address: '',
				status: 'Error: ' + err.message
			};
		}
	} else {
		return {
			address: '',
			status: (
				<span>
					<p>
						<a target="_blank" href={`https://metamask.io/download.html`}>You must install Metamask.</a>
					</p>
				</span>
			)
		};
	}
};




export const connectWallet = async () => {
	if (window.ethereum) {
		try {
			const addressArray = await window.ethereum.request({
				method: 'eth_requestAccounts'
			});
			const obj = {
				status: 'Press to claim the next NFT',
				address: addressArray[0]
			};
			return obj;
		} catch (err) {
			return {
				address: '',
				status: 'Error: ' + err.message
			};
		}
	} else {
		return {
			address: '',
			status: (
				<span>
					<p>
						<a target="_blank" href={`https://metamask.io/download.html`}>You must install Metamask.</a>
					</p>
				</span>
			)
		};
	}
};


export const mintToken = async (address, qty) => {
	log("hello from inside mint token");
	/*
	CollectionContract.handleRevert = true;
	const costOfNFTS = qty * 123000000000;//matches price of 0.000000123 ETH
	const checkTotal = await CollectionContract.methods.maximumAllowedTokensPerPurchase().call();
	const currentBalance = await web3.eth.getBalance(address);
	if (currentBalance > costOfNFTS) {
		if (parseInt(qty) <= parseInt(checkTotal)) {
			const transactionParameters = {
				to: contractAddress, // Required except during contract publications.
				from: window.ethereum.selectedAddress, // must match user's active address.
				data: CollectionContract.methods.mint(address, qty).encodeABI(), //make call to NFT smart contract
				value: '0x' + costOfNFTS.toString(16)
			};

			//sign transaction via Metamask
			try {
				const txHash = await window.ethereum.request({
					method: 'eth_sendTransaction',
					params: [ transactionParameters ]
				});

				return {
					success: true,
					status: 'Success: Check out your transaction on Etherscan: https://www.etherscan.io/tx/' + txHash
				};
			} catch (error) {
				console.log(error);
				return {
					success: false,
					status: 'Error: Something went wrong: ' + error.message
				};
			}
		} else {
			return {
				success: false,
				status: 'Error: Tried to mint more than maximum'
			};
		}
	} else {
		return {
			success: false,
			status: 'Error: Insufficient Funds.'
		};
	}
	*/
};
//TODO ok, but are the price and maximum quantity to mint also set in the contract?

export const setActive = async () => {
	log("hi from set active");
	/*
	const transactionParameters = {
		to: contractAddress, // Required except during contract publications.
		from: window.ethereum.selectedAddress, // must match user's active address.
		data: CollectionContract.methods.setActive(true).encodeABI() //make call to NFT smart contract
	};
	//sign transaction via Metamask
	try {
		const txHash = await window.ethereum.request({
			method: 'eth_sendTransaction',
			params: [ transactionParameters ]
		});
		return {
			success: true,
			status: 'Success: Check out your transaction on Etherscan: https://www.etherscan.io/tx/' + txHash
		};
	} catch (error) {
		return {
			success: false,
			status: 'Error: Something went wrong: ' + error.message
		};
	}
	*/
};







function App() {
	return (
		<div className="App">
			<p>Hello, radical-mint!</p>
			<p>Date 2022apr11, Version 25</p>
			<Wallet />
		</div>
	);
}

export default App;

