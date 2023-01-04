import { useRouter } from "next/router";
import Header from "../Common/Header";

export default function RouteName() {
  const { asPath } = useRouter();
  return (
    <div className="bg-white text-blue-500 min-h-screen ">
      <Header />
      <div>
        <h5>Hi I am Chiranjeev Mishra,an aspiring Blockchain Developer</h5>
        <p>
          This project aims for creating a web3 App which authenticates your
          web2 financial details like your AADHAR,PAN etc details then mint you
          an NFT after verification.
        </p>
      </div>
      <div className="text-black flex gap-2">
        <p>Connect with me at</p>
        <a className="hover:underline" href="https://github.com/chiranjeev13">
          GITHUB
        </a>
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/chiranjeev-mishra-8b8008205/"
        >
          LINKEDIN
        </a>
      </div>
    </div>
  );
}
