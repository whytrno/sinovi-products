import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Navbar from "@/components/Navbar";
import Produk from "@/components/Produk";
import VisiMisi from "@/components/VisiMisi";
import Head from "next/head";

export default function Home() {
  return (
    <html className="scroll-smooth">
      <Head>
        <title>Sentra Inovasi</title>
        <meta name="description" content="Sentra Inovasi" />
      </Head>
      <div className="max-w-screen">
        <div className="h-screen">
          <Navbar />
          <Hero />
        </div>
        <VisiMisi />
        <Layanan />
        {/* <Produk /> */}
        <Footer />
      </div>
    </html>
  )
}