import { useRouter } from "next/router";
import Header from "../Common/Header";
import homeImage from "./Images/home.gif";
import uploadImage from "./Images/upImage.png"
import veriImage from "./Images/download.png"
import nftImage from "./Images/test3.png"
import Image from "next/image";

export default function RouteName() {
  const { asPath } = useRouter();
  return (
    <div className="bg-white text-blue-500 min-h-screen">
      <Header />
      <div className="p-4">
        <div className="p-5 font-extrabold text-2xl">
          Once authenticated, always aquainted...
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 p-4">
          <div className="flex justify-end items-center">
            <Image
              src={homeImage}
              alt="Picture of documents"
              width="200px"
              height="200px"
            />
          </div>

          <div className="flex flex-col items-center justify-start text-2xl">
            <p>
              Get your KYC documents Verified using our{" "}
              <b>Zero Knowledge based Blockchain Technology</b>{" "}
            </p>
            What we do:
            <div className="flex flex-col md:flex-row gap-10">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="flex justify-center items-center w-full h-1/3">
                <Image src={uploadImage} height="50px" width="50px" alt="Image" />
              </div>
              <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Upload Information</div>
                  <p class="text-gray-700 text-base">
                    Upload the required information and documents you need to
                    get verified wherever needed
                  </p>
                </div>
              </div>

              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="flex justify-center w-full h-1/3">
                  <Image height="50px" width="50px" src={veriImage} alt="SImage" />
                </div>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Get Data Verified</div>
                  <p class="text-gray-700 text-base">
                    Get the data you submitted verified using otp. Once the data
                    is verified, the D-Auth's system will initiate NFT
                    generation.
                  </p>
                </div>
              </div>

              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="flex justify-center w-full h-1/3">
                  <Image height= "50px" width="50px" src={nftImage} alt="Image" />
                </div>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Recieve your NFT</div>
                  <p class="text-gray-700 text-base">
                    After the verification is completed, user will recieve the NFT based signature for future KYC processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <a
          href="/upload"
          className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
        >
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="relative z-20 flex items-center text-sm">
            <svg
              className="relative w-5 h-5 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Get Started
          </span>
        </a>
        </div>
      </div>
  );
}
