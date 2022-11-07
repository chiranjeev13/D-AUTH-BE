import { useRouter } from "next/router";
import Header from "../Common/Header";
import homeImage from "./Images/home.png";
import Image from "next/image";

export default function RouteName() {
  const { asPath } = useRouter();
  return (
    <div className="bg-white text-blue-500 min-h-screen">
      <Header />
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between gap-6 p-4">
          <div className="flex justify-end items-center">
            <Image
              src={homeImage}
              alt="Picture of documents"
              width="200px"
              height="200px"
            />
          </div>
          <div className="flex items-center justify-start text-2xl">
            <p>Get your KYC documents once and for all</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="#_"
          class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
        >
          <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span class="relative z-20 flex items-center text-sm">
            <svg
              class="relative w-5 h-5 mr-2 text-white"
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
