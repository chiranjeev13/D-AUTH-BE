import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../Common/Header";
import { ethers } from "ethers";
import contr from "../../artifacts/contracts/NFT-MINT.sol/NFT_MINT.json";
import img from "../../NFT_metadata/images/tes.jpg";

export default function RouteName() {
  const [address, setAddress] = useState("");
  const { asPath } = useRouter();
  let provider, contractAddress, ABI;

  useEffect(() => {
    provider = new ethers.providers.Web3Provider(window.ethereum);

    contractAddress = "0x3cd89e59DE6ACE1125f5baC5db7BC3CF0BEAb40b";
    ABI = contr.abi;
    const provider_contract = new ethers.Contract(
      contractAddress,
      ABI,
      provider
    );
    async function requestAccount() {
      const accns = await window.ethereum.request({
        method: "eth_requestAccounts",
      }); // prompt the user to connect one of their metamask accounts if they haven't  already connected
      setproviderConnected(true);
    }
  });

  const connectWallet = async () => {
    await requestAccount();
    const signer = provider.getSigner();
    const newsignedContract = new ethers.Contract(contractAddress, ABI, signer);
    signedContract = newsignedContract;
    console.log("connected");
  };

  const verify = async () => {
    const signer = provider.getSigner();
    const newsignedContract = new ethers.Contract(contractAddress, ABI, signer);
    try {
      const values = await newsignedContract.Verifier(address);
      const tkid = parseInt(values[0]._hex, 16).toString();
      const bolval = values[1].toString();
      alert("Token Id : " + tkid + "\n" + bolval);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="bg-white text-blue-500 min-h-screen">
      <Header />
      <div className="p-4">
        <img src={img} alt=""/>
        <p className="text-3xl font-bold">Verify</p>
        <p>Get your Aadhar verified</p>
        <div className="flex justify-center items-center pt-4">
          <form className="flex flex-col gap-3 justify-center items-center w-full md:w-2/3">
            <TextField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
            ></TextField>

            <Button
              variant="contained"
              fullWidth
              onClick={async () => {
                await verify();
                console.log(address);
                console.log("success");
              }}
              color="secondary"
              className="text-purple-800 hover:text-white md:w-auto w-full mt-4"
            >
              Verify
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
