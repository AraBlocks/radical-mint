import logo from './logo.svg';
import './App.css';
import Wallet from './components/wallet';



//this works now
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');



function App() {
	return (
		<div className="App">
			<p>Hello, radical-mint!</p>
			<p>Date 2022apr8, Version 19</p>
			<Wallet />
		</div>
	);
}

export default App;

