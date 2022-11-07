const { network } = require("hardhat");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("----------");
  console.log(deploy);
  console.log(deployer);
  const args = [];
  const NFT_MINT = await deploy("NFT_MINT", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: 1,
  });
  console.log("----------");
};
module.exports.tags = ["all"];
