import { useRouter } from "next/router";
import Header from "../Common/Header";

export default function RouteName() {
  const { asPath } = useRouter();
  return (
    <div className="bg-white text-blue-500 min-h-screen">
      <Header />
      <div>
        <h5>Hi I am Chiranjeev Mishra,an aspiring Blockchain Developer</h5>
        <p>This project aims for creating a web3 App which authenticates your web2 financial details like your AADHAR,PAN etc details then mint you an NFT after verification.</p>
      </div>
      <div>
        <a href="github.com/chiranjeev13">GITHUB</a>
        <a href="https://www.linkedin.com/in/chiranjeev-mishra-8b8008205/"> LINKEDIN</a>
      </div>
    </div>
  );
}
