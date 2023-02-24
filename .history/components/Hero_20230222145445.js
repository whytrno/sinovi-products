import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative w-full h-screen flex items-center justify-between px-20 2xl:px-60">
            <img src="/images/hero-bg.jpg" alt="hero" className="w-full h-full object-cover absolute top-0 left-0 -z-10" />
            <div className="space-y-10">
                <h1 className="font-semibold text-5xl 2xl:text-6xl text-primary">Mulai bisnis bersama <br></br> Sentra Inovasi</h1>
                <Link href="/" className="font-semibold text-xl w-min whitespace-nowrap py-3 px-20 bg-secondary rounded-lg text-white block">Tentang Kami</Link>
            </div>
            <div>
                <img src="/images/hero.png" alt="hero" />
            </div>
        </div>
    )
}