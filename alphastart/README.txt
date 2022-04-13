NFT Deployment Tutorial
https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/


-------------------------------------------------------------------------------
Launch a shell window / Windows Powershell

-Clone the project from github and get the folders locally.

-Initialize  the project: npm init 

-Install Hardhat: npm install --save-dev hardhat

-Create Hardhat project: npx hardhat

-Don't create an empty hardhat config, as it should already exist.

-Install dotenv: npm install dotenv --save

-Create a .env file in the root directory of our project, add 
--API_URL="https://rinkeby.infura.io/v3/<apikey>"
--PRIVATE_KEY="<private key for the wallet to be used for deploying>"

-Install ether.js: npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0

-Compile the contract: npx hardhat compile

-Deploy the contract: npx hardhat --network ropsten run scripts/deploy.js

-You should see something like: 
--Contract deployed to address: 0x81c587EB0fE773404c42c1d2666b5f557C470eED


-------------------------------------------------------------------------------
Once the contract is deployed to Etherscan, you can go to the entry there and 
verify the contract.

Select the solidity compiler to match the version in hardhat.config.js
-Select single file.
-Make sure the optimization settings are the same (might need to click miscellaneous). <Yes | 2000>
-Paste the contents of the single file into Etherscan.
-Select no license type (or maybe select it, but I'm not sure if that needs to be specified/matched in the contract.
