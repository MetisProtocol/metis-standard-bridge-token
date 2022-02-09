import * as dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import "./ts-src/tasks/accounts";

if (!process.env.PRIVATE_KEY) {
  throw new Error(`No private key`);
}

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    andromeda: {
      url: "https://andromeda.metis.io/?owner=1088",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    deploy: "ts-src/deploy",
  },
};

export default config;
