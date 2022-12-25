require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy");

const MAINET_RPC_URL = process.env.MAINET_RPC_URL;
const FANTOM_RPC_URL = process.env.FANTOM_RPC_URL;
const RINKEBY_RPC_URl = process.env.RINKEBY_RPC_URl;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ZEEVE_FANTOM_RPC_URL = process.env.ZEEVE_FANTOM_RPC_URL;
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.4.25",
      },
      {
        version: "0.4.19",
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 31337,
      // forking: {
      //   url: MAINET_RPC_URL,
      // },
    },
    fantom: {
      chainId: 4002,
      url: FANTOM_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
      blockConfirmations: 6,
    },
    polygon: {
      chainId: 137,
      url: POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY],
      blockConfirmations: 6,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
