import Image from "next/image";
import { Inter } from "next/font/google";
import Top from "./pages/top/Top";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Top />;
}
