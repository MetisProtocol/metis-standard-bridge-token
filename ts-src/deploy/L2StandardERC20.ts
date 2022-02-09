import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "ethers";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const l2name = process.env.L2_TOKEN_NAME as string;
  const l2symbol = process.env.L2_TOKEN_SYMBOL as string;
  const l2bridge =
    process.env.L2_BRIDGE_ADDRESS ||
    "0x4200000000000000000000000000000000000010";
  const l1token = process.env.L1_TOKEN_ADDRESS as string;

  console.log("l1token", l1token);
  console.log("l2bridge", l2bridge);
  console.log("l2TokenName", l2name);
  console.log("l2TokenSymbol", l2symbol);

  const mustValidAddress = (addr: string, kind: string) => {
    if (!addr) {
      throw new Error(`${kind} is not setted`);
    }
    if (!ethers.utils.isAddress(addr)) {
      throw new Error(`${kind} is not a valid address`);
    }
  };
  mustValidAddress(l1token, "l1token");
  mustValidAddress(l2bridge, "l2bridge");

  const mustValidString = (val: any, kind: string) => {
    if (!val) {
      throw new Error(`${kind} is not setted`);
    }
  };
  mustValidString(l2name, "l2TokenName");
  mustValidString(l2symbol, "l2TokenSymbol");

  await deploy("L2StandardERC20", {
    from: deployer,
    args: [l2bridge, l1token, l2name, l2symbol],
    log: true,
  });
};

func.tags = ["standard"];

export default func;
