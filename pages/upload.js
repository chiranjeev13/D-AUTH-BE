import { useRouter } from "next/router";
import Header from "../Common/Header";

export default function RouteName() {
  const { asPath } = useRouter();
  return (
    <div className="bg-white text-blue-500 min-h-screen">
      <Header />
    </div>
  );
}
