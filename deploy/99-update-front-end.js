const { ethers, network } = require("hardhat");
const fs = require("fs");
const FRONT_END_ADDRESSES_FILE =
  "../D-AUTH-FE/constants/contractAddresses.json";
const FRONT_END_ABI_FILE = "../D-AUTH-FE/constants/abi.json";
console.log(FRONT_END_ADDRESSES_FILE);

module.exports = async function () {
  if (process.env.UPDATE_FRONTEND) {
    console.log("UPDATING frontend!!");
    updateContractAddress();
    updateabi();
    console.log("UPDATED frontend!!");
  }
};
async function updateabi() {
  const NFT_MINT = await ethers.getContract("NFT_MINT");
  fs.writeFileSync(
    FRONT_END_ABI_FILE,
    NFT_MINT.interface.format(ethers.utils.FormatTypes.json)
  );
}
async function updateContractAddress() {
  const chainId = network.config.chainId.toString();
  console.log(chainId);
  const NFT_MINT = await ethers.getContract("NFT_MINT");
  const currentAddresses = JSON.parse(
    fs.readFileSync(FRONT_END_ADDRESSES_FILE, "utf8")
  );
  if (chainId in currentAddresses) {
    if (!currentAddresses[chainId].includes(NFT_MINT.address)) {
      currentAddresses[chainId].push(NFT_MINT.address);
    }
  }

  currentAddresses[chainId] = [NFT_MINT.address];

  fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(currentAddresses));
}

module.exports.tags = ["all", "frontend"];
