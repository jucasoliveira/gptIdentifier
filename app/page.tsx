import { Inter } from "next/font/google";
import TextCard from "@/components/TextCard/TextCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-6 min-h-screen bg-white">
      <div className="flex justify-center items-center relative p-4 min-h-screen">
        <TextCard />
      </div>
    </main>
  );
}
