import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(false);

    return (
        <div className="flex items-center justify-between p-5 2xl:px-60 shadow-xl fixed w-full z-50 bg-white top-0 left-0">
            <div className="flex items-center gap-5">
                <img src="logo/ittp.png" alt="Ittp Logo" className="hidden sm:inline-block" />
                <img src="logo/bdv.png" alt="BDV Logo" className="hidden sm:inline-block" />
                <img src="logo/sinovi.png" alt="Sinovi Logo" />
            </div>
            <div className="hidden font-semibold text-primary gap-4 2xl:gap-8 sm:flex items-center">
                <Link href="/#visi-misi">Visi Misi</Link>
                <Link href="/#layanan">Layanan</Link>
                <Link href="/products">Daftar Produk</Link>
            </div>

            {/* MOBILE */}
            <div className="sm:hidden">
                <button onClick={() => setMobileNav(!mobileNav)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div className={`${mobileNav ? "right-0" : "hidden"} transition-all absolute top-[98px] z-50 shadow-2xl bg-white p-10 space-y-5`}>
                    <Link href="/#visi-misi" className="block font-semibold text-primary">Visi Misi</Link>
                    <Link href="/#layanan" className="block font-semibold text-primary">Layanan</Link>
                    <Link href="products" className="block font-semibold text-primary">Daftar Produk</Link>
                </div>
            </div>
        </div>
    )
}