import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Navbar from "@/components/Navbar";
import VisiMisi from "@/components/VisiMisi";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VisiMisi />
      <Layanan />
    </div>
  )
}