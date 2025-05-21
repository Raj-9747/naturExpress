import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; 

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello</h1>
        <Link href="/login">
          <button>Login</button>
        </Link>
        <Link href="/home">
          <button>Home</button>
        </Link>
      </div>
    </>
  );
}