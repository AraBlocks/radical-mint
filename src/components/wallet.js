import React from 'react';
import { useEffect, useState } from 'react';
import { isDesktop } from 'react-device-detect';
import {
	/*
	CollectionContract,
	setActive,
	*/
	connectWallet,
	mintToken,
	getCurrentWalletConnected,
	myFunFunction
} from '../util/interact.js';

const log = console.log;

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

export default Wallet;




