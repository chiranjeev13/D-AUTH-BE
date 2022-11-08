import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import Header from "../Common/Header";
import { abi, contractAddresses } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";

export default function RouteName() {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [number, setNumber] = useState();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
  const chainId=parseInt(chainIdHex);
  const DAUTHAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  const { asPath } = useRouter();



  const {
    runContractFunction: mint,
    data: enterTxResponse,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: DAUTHAddress,
    functionName: "mint",
    params: {
      args: [1],
    },
  });
  const { runContractFunction: getVerifiedstatus } = useWeb3Contract({
    abi: abi,
    contractAddress: DAUTHAddress, // specify the networkId
    functionName: "getVerifiedstatus",
    params: {},
  });

  const { runContractFunction: Verifier } = useWeb3Contract({
    abi: abi,
    contractAddress: DAUTHAddress, // specify the networkId
    functionName: "Verifier",
    params: {
      args: [],
    },
  });


  return (
    <div className="bg-white text-blue-500 min-h-screen">
      <Header />
      <div className="p-4">
        <p className="text-3xl font-bold">Verify Aadhar</p>
        <p>Get your aadhar verified and generate a NFT token</p>
        <div className="flex justify-center items-center pt-4">
          <form className="flex flex-col gap-3 justify-center items-center w-full md:w-2/3">
            <TextField
              label="Name"
              value={name}
              fullWidth
              onChange={(e) => setName(e.target.value)}
            ></TextField>

            <TextField
              label="Aadhaar Number"
              value={aadhar}
              fullWidth
              onChange={(e) => setAadhar(e.target.value)}
            ></TextField>

            <TextField
              InputLabelProps={{ shrink: true }}
              label="DOB"
              type="date"
              fullWidth
            ></TextField>

            <TextField
              label="Number"
              value={number}
              type="tel"
              fullWidth
              onChange={(e) => setNumber(e.target.value)}
            ></TextField>

            <Button
              variant="contained"
              fullWidth
              color="secondary"
              disabled={otpSent}
              onClick={() => setOtpSent(true)}
              className="text-purple-800 hover:text-white md:w-auto w-full mt-4"
            >
              Send OTP
            </Button>
            {otpSent && <button>Resend OTP</button>}

            {otpSent && (
              <div className="pt-6 flex flex-col justify-center items-center w-full md:w-auto">
                <TextField
                  label="OTP"
                  value={otp}
                  fullWidth
                  onChange={(e) => setOtp(e.target.value)}
                ></TextField>

                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  className="text-purple-800 hover:text-white md:w-auto w-full mt-4"
                >
                  Submit
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
