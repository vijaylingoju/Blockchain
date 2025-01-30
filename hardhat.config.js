require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0", // Make sure to specify your Solidity version here
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Ensure this matches your Hardhat node
    },
  },
};
