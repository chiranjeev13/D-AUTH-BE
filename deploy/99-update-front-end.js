const frontEndAbiFile = "../D-AUTH-FE/constants/abi.json";
const frontEndContractsFile = "../D-AUTH-FE/constants/contractAddresses.json";
const fs = require("fs");
const { network } = require("hardhat");

module.exports = async () => {
  if (process.env.UPDATE_FRONTEND) {
    console.log("Writing to front end...");
    await updateContractAddresses();
    await updateAbi();
    console.log("Front end written!");
  }
};

async function updateAbi() {
  const NFT_MINT = await ethers.getContract("NFT_MINT");
  fs.writeFileSync(
    frontEndAbiFile,
    NFT_MINT.interface.format(ethers.utils.FormatTypes.json)
  );
}

async function updateContractAddresses() {
  const NFT_MINT = await ethers.getContract("NFT_MINT");
  const contractAddresses = JSON.parse(
    fs.readFileSync(frontEndContractsFile, "utf8")
  );
  if (network.config.chainId.toString() in contractAddresses) {
    if (
      !contractAddresses[network.config.chainId.toString()].includes(
        NFT_MINT.address
      )
    ) {
      contractAddresses[network.config.chainId.toString()].push(
        NFT_MINT.address
      );
    }
  } else {
    contractAddresses[network.config.chainId.toString()] = [NFT_MINT.address];
  }
  fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses));
}
module.exports.tags = ["all", "frontend"];
