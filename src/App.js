import logo from './logo.svg';
import './App.css';
import Wallet from './components/wallet';



//uncomment this line to see all the errors!
//const { createAlchemyWeb3 } = require('@alch/alchemy-web3');



function App() {
	return (
		<div className="App">
			<p>Hello, radical-mint!</p>
			<p>Date 2022apr5, Version 12</p>
			<Wallet />
		</div>
	);
}

export default App;


/*
moved here from package.json

    "@alch/alchemy-web3": "^1.3.0",

    "dotenv": "^16.0.0",

    "assert": "^2.0.0",
    "crypto": "^1.0.1",
    "http": "0.0.1-security",
    "https": "^1.0.0",
    "stream": "0.0.2",
    "util": "^0.12.4",






*/
