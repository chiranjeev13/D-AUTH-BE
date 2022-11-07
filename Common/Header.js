export default function Header() {
  return (
    <div>
      <div className="p-6 flex flex-row justify-between items-center">
        <div className="text-3xl font-medium">D-Auth</div>
        <div className="flex md:flex-row flex-col gap-12 p-2">
          <p className="hover:underline transition duration-200">Discover</p>
          <p className="hover:underline transition duration-200">About Us</p>
          <p className="hover:underline transition duration-200">
            Connect Wallet
          </p>
        </div>
      </div>
    </div>
  );
}
