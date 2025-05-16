import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Cora Jones</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
        <video className="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="/ai.mp4" type="video/mp4" /></video>
        <div className="masthead">
            <div className="masthead-content text-white">
                <div className="container-fluid px-4 px-lg-0">
                    <h1 className="fst-italic lh-1 mb-4">CORA JONES</h1>
                    <h3 className="fst-italic lh-1 mb-4">Director of AI & Cloud Architecture</h3>
                    <p className="mb-5">Helping organizations ship secure, scalable AI systems.</p>
                    <p className="mb-5">Site launching soon — for advisory inquiries, <a href="mailto:contact@architectingscale.com">contact@architectingscale.com</a></p>
                    
                </div>
            </div>
        </div>
       
    </>
  );
}
