# BlockPass Smart Contract

Welcome to the BlockPass smart contract repository! BlockPass is a decentralized platform on the Scroll blockchain for creating and managing block passes tickets, implemented as non-fungible tokens (NFTs) following the ERC721 standard.

## Features

- Organizers can create and manage block passes for various events.
- Users can purchase block passes by acquiring NFTs.
- Block passes have attributes such as metadata, category, maximum pass count, pass price, start time, and sales end time.
- Secure handling of pass sales through blockchain transactions.
- Organizers receive the proceeds from pass sales, with a small fee deducted for platform maintenance.
- Users can track their acquired block passes and view events they've created.
- Events can be categorized, and users can search for events based on categories.
- Block passes can be removed by the organizer if no passes have been sold.

## Deployed Contract Address

Find below the address of the deployed BlockPass smart contract on the Scroll network:

- [BP Contract](https://etherscan.io/address/0xabcde12345)

## Contract Deployment Instructions

To deploy the BlockPass smart contract, follow these steps:

1. Compile the BlockPass.sol file using a Solidity compiler like Remix or Hardhat.

2. Deploy the contract to the Scroll network of your choice, ensuring that the constructor is executed during deployment.

3. After successful deployment, make a note of the contract address provided by the deployment tool.

4. Interact with the deployed contract by calling its functions or using a user interface that connects to the contract.

## License

The BlockPass smart contract is licensed under the MIT License. Refer to the [LICENSE](LICENSE) file for details.


-------------

**BlockPass: Decentralized Event Ticketing Platform**

Welcome to BlockPass, the decentralized platform revolutionizing event ticketing through blockchain technology and non-fungible tokens (NFTs). This README will guide you through the process of getting started with BlockPass, from installation to using the Smartcontract effectively.

### Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
    - [Creating a New Pass](#creating-a-new-pass)
    - [Purchasing a Pass](#purchasing-a-pass)
4. [Key Features](#key-features)
5. [Contributing](#contributing)
6. [Support](#support)
7. [License](#license)

### Introduction
BlockPass is a decentralized platform built on the Scroll blockchain, designed to address the challenges of traditional event ticketing systems. By leveraging blockchain technology and NFTs, BlockPass ensures fair ticket pricing, prevents scalping, and guarantees the authenticity of event tickets.

### Installation
To get started with BlockPass, follow these steps:

1. Clone the BlockPass repository to your local machine:
   ```
   git clone https://github.com/alade-dev/Blockpass
   ```

2. Install dependencies:
   ```
   cd blockpass
   npm install
   ```

3. Compile the smart contracts:
   ```
   npx hardhat compile
   ```

4. Deploy the contracts to the Scroll blockchain:
   ```
   npx hardhat run scripts/deploy.js --network scrollSepolia
   ```

### Usage
#### Creating a New Pass
To create a new pass on BlockPass, organizers can follow these steps:

1. Connect your Scroll wallet to the BlockPass platform.
2. Navigate to the "Create New Pass" section.
3. Fill in the details of the pass, including maximum pass count, start time, sales end time, initial pass price, metadata, and category.
4. Confirm the creation of the pass, and it will be deployed on the blockchain.

#### Purchasing a Pass
To purchase a pass on BlockPass as an attendee, follow these steps:

1. Connect your Scroll wallet to the BlockPass platform.
2. Browse the available passes and select the desired pass.
3. Review the pass details, including pricing and availability.
4. Click "Purchase Pass" and confirm the transaction using your wallet.
5. Upon successful purchase, the pass will be minted as an NFT in your wallet.

### Key Features
- **Dynamic Pricing:** Prices of passes are dynamically adjusted based on real-time market conditions using Chainlink price feeds.
- **Fair Access:** Unique NFT-based passes prevent scalping and ensure fair access for genuine fans.
- **Immutable Records:** All ticket transactions are recorded on the blockchain, ensuring transparency and preventing fraud.

### Chainlink Integration
BlockPass integrates Chainlink price feeds to enable dynamic pricing of event passes. The `updateFeedPrice` function in the smart contract retrieves real-time asset prices from Chainlink oracles and adjusts the pass price accordingly. This ensures that pass prices remain fair and reflect current market conditions.

### Contributing
We welcome contributions from the community to help improve BlockPass. If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Make your changes in a new branch.
3. Submit a pull request detailing your changes.

### Support
If you encounter any issues or have questions about BlockPass, please reach out to us through the following channels:
- Email: support@blockpass.com
- Discord: [BlockPass Discord Server](https://discord.gg/blockpass)

### License
BlockPass is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Thank you for choosing BlockPass for your event ticketing needs! 🎫🚀

