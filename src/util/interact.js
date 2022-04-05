//require('dotenv').config();

const log = console.log;


/*
https://stackoverflow.com/questions/42182577/is-it-possible-to-use-dotenv-in-a-react-project

Sorry for picking up old question, but
react-scripts actually uses dotenv library under the hood.

With react-scripts@0.2.3 and higher, you can work with environment variables this way:

create .env file in the root of the project
set environment variables starting with REACT_APP_ there
access it by process.env.REACT_APP_... in components
*/





export function myFunFunction() {

	console.log("hello from my fun function");
	console.log(process.env.REACT_APP_KEY);
	console.log(process.env.REACT_APP_SECOND_KEY);
	console.log(process.env.REACT_APP_KEY3);
	console.log("^ hopefully you got three environment variables");

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


//troublesome area below, trying to get it out of comments
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
/*
const alchemyKey = "https://eth-mainnet.alchemyapi.io/v2/" + "GetFromEnvironmentVariables";//TODO
const web3 = createAlchemyWeb3(alchemyKey);

let contractABI = require('./contract-abi.json');
// const contractAddress = '0xd80B07293C85C91A221B0538369994C70fb5cdBe';//rinkeby
const contractAddress = '0x88954a16b93f296d3d993793143e2dcbc32222b2';//mainnet

export const CollectionContract = new web3.eth.Contract(contractABI, contractAddress);
CollectionContract.handleRevert = true;
*/


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






