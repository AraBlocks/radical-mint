import logo from './logo.svg';
import './App.css';
import Wallet from './components/wallet';



//this works now
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');



function App() {
	return (
		<div className="App">
			<p>Hello, radical-mint!</p>
			<p>Date 2022apr5, Version 18</p>
			<Wallet />
		</div>
	);
}

export default App;

