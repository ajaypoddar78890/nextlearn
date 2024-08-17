import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center bg-red-400  h-screen w-full">
        <h1>hey this hello is comming from morestudios team </h1>
        <Link href="/home" className="bg-blue-400 p-5">
          home
        </Link>
        <Link href="/blog" className="bg-yellow-400 p-5">
          blog
        </Link>
        <Link href="/news" className="bg-green-700 p-5">
          news
        </Link>
      </main>
    </>
  );
}
