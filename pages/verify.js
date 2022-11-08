import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../Common/Header";

export default function RouteName() {
  const [address, setAddress] = useState("");
  const { asPath } = useRouter();
  return (
    <div className="bg-white text-blue-500 min-h-screen">
      <Header />
      <div className="p-4">
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
