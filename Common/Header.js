import { ConnectButton } from "web3uikit"

export default function Header() {
  return (
    <div className="bg-gray-100 shadow-lg">
      <div className="p-6 flex flex-row justify-between items-center">
        <div className="text-3xl font-medium">D-Auth</div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-2 p-2">
          <a href="/verify" className="hover:underline transition duration-200">
            Verify
          </a>
          <a href="/about" className="hover:underline transition duration-200">
            About Us
          </a>
          <a className="hover:underline transition duration-200">
          <nav className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 px-4 font-bold text-3xl"></h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
          </a>
        </div>
      </div>
    </div>
  );
}
