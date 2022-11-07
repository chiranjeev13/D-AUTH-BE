import { useRouter } from "next/router";

export default function RouteName() {
  const { asPath } = useRouter();
  return <div className="mx-auto my-12 text-3xl">Path: {asPath}</div>;
}
