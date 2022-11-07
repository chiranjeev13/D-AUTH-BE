const { assert } = require("chai");
const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("NFT_MINT", async function () {
      beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture("all");
        NFT_MINT = await ethers.getContract("NFT_MINT", deployer);
      });
      describe("constructor", async function () {
        it("initializes constructor properly", async function () {
          const sfmint = await NFT_MINT.getchk();
          assert.equal("1", sfmint.toString());
        });

        it("check the total supply", async function () {
          const ts = await NFT_MINT.getTotalSupply();
          assert.equal("1", ts.toString());
        });
      });

      

      describe("checks the mint function", async function () {
        it("check if its verified", async function () {
          await NFT_MINT.mint(1);
          const verf = await NFT_MINT.getVerifiedstatus();
          assert.equal("true", verf.toString());
        });
      });
    });
