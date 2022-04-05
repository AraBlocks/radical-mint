import logo from './logo.svg';
import './App.css';
import Wallet from './components/wallet';
/*

    "@alch/alchemy-web3": "^1.3.0",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-device-detect": "^2.1.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"

    "dotenv": "^16.0.0",

    "assert": "^2.0.0",
    "crypto": "^1.0.1",
    "http": "0.0.1-security",
    "https": "^1.0.0",
    "stream": "0.0.2",
    "util": "^0.12.4",






*/


//uncomment this line to see all the errors!
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');



function App() {
	return (
		<div className="App">
			<p>Hello, radical-mint!</p>
			<p>Date 2022apr5, Version 16</p>
			<Wallet />
		</div>
	);
}

export default App;

