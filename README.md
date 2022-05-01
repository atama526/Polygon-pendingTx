# See the Polygon test network latest pending transactions

App that retrieves pending transactions from the EVM mempool and displays them to the user.
Open https://atama526.github.io/Polygon-pendingTx/ to view it in your browser.

(./public/Image.PNG)

## How it works?

Using a WebSocket connection to a node and the following method in the web3.js library https://web3js.readthedocs.io/en/v1.7.0/web3-eth-subscribe.html#subscribe-pendingtransactions you can connect to the Polygon Blockchain testnet network and check the latest block and pending transactions from the EVM mempool

### How to use it? 

Get a quick free node endpoint (HTTPS/WSS) to use the app by signing up with Chainstack https://console.chainstack.com/user/account/create and selecting the free Developer plan.
You can also use the example wws node point that is provided in the application ( wss://ws-nd-214-862-598.p2pify.com/4ae723430a82c489e6a50607b4e8110a)
 
### Dependencies

This project used the following technologies: 

- Project bootstraped with: Create-React-App https://github.com/facebook/create-react-app
- NPM: https://nodejs.org
- Working polygon node: https://chainstack.com


### Step 1. Clone the project
`git clone https://github.com/atama526/Polygon-pendingTx`

### Step 2. Install dependencies
```
$ cd pendingTx
$ npm install
```
### Step 3. Use the App
Get a quick free node endpoint (HTTPS/WSS) to use the app by signing up with Chainstack https://console.chainstack.com/user/account/create and selecting the free Developer plan.

