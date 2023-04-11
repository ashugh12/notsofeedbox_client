import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full items-center justify-between p-24">
      <div className="bg-black flex flex-col w-full items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Under Development</h1>
        <p className="text-gray-600 text-lg mb-8">
          We&apos;re currently working on this website. Stay tuned!
        </p>
      <Navbar />
      </div>
    </main>
  );
}
