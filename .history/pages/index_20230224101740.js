import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Navbar from "@/components/Navbar";
import Produk from "@/components/Produk";
import VisiMisi from "@/components/VisiMisi";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VisiMisi />
      <Layanan />
      <Produk />
    </div>
  )
}