import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../Common/Header";
const axios = require("axios").default;

const options = {
  method: "POST",
  url: "https://d7-verify.p.rapidapi.com/verify/v1/otp/send-otp",
  headers: {
    "content-type": "application/json",
    Token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiMWU1NmVlZWUtMzY2Ny00MjY0LWI1OGMtZmY4NDg5NGIyODk4In0.vGwG-PkvGQN_LZl-R2rb1lk5bd1_0AqQorgXURqVP9E",
    "X-RapidAPI-Key": "c4aacdd6f5msh971693a8fd7c123p1dba77jsn01c3b4eb154c",
    "X-RapidAPI-Host": "d7-verify.p.rapidapi.com",
  },
  data: '{"originator":"SignOTP","recipient":"+919082871739","content":"OTP verification code is: {}","expiry":"600","data_coding":"text"}',
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default function RouteName() {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [mobile, setNumber] = useState();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  async function handleSubmit() {
    // setting options for sending otp
    const options = {
      method: "POST",
      url: "https://d7-verify.p.rapidapi.com/verify/v1/otp/send-otp",
      headers: {
        "content-type": "application/json",
        Token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiYWM4NGE4YTQtZWEwOS00YmJmLWFkYjItY2RlNDRmMzJkYzAyIn0.OvD-dwbvd1EBEfKtEm9ZEXv83I0MVk53-5xsw-UalvY",
        "X-RapidAPI-Key": "c4aacdd6f5msh971693a8fd7c123p1dba77jsn01c3b4eb154c",
        "X-RapidAPI-Host": "d7-verify.p.rapidapi.com",
      },
      data: `{"originator":"SignOTP","recipient":"+91${mobile}","content":"OTP verification code is: {}","expiry":"600","data_coding":"text"}`,
    };

    // posting the request
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const { asPath } = useRouter();
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
              value={mobile}
              type="tel"
              fullWidth
              onChange={(e) => setNumber(e.target.value)}
            ></TextField>

            <Button
              variant="contained"
              fullWidth
              color="secondary"
              disabled={otpSent}
              onClick={() => {
                setOtpSent(true);
                handleSubmit();
              }}
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
