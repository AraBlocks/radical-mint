import logo from './logo.svg';
import './App.css';
import Wallet from './components/wallet';



//uncomment this line to see all the errors!
//const { createAlchemyWeb3 } = require('@alch/alchemy-web3');



function App() {
	return (
		<div className="App">
			<p>Hello, radical-mint!</p>
			<p>Date 2022apr5, Version 10</p>
			<Wallet />
		</div>
	);
}

export default App;
