/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: {
		version: "0.8.9",
		settings: {
			optimizer: {
				enabled: true,
				runs: 2000,
			},
		},
	},
	defaultNetwork: "rinkeby",
	networks: {
		rinkeby: {
			url: API_URL,
			accounts: [PRIVATE_KEY]
		},
	},
}