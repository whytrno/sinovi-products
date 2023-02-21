import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-5 shadow-xl">
            <div className="flex items-center gap-5">
                <img src="logo/ittp.png" alt="Ittp Logo" />
                <img src="logo/bdv.png" alt="BDV Logo" />
                <img src="logo/sinovi.png" alt="Sinovi Logo" />
            </div>
            <div className="font-semibold text-primary gap-4 flex items-center">
                <Link href="/" className="text-secondary">Beranda</Link>
                <Link href="/">Ternaku</Link>
                <Link href="/">Calaun</Link>
                <Link href="/">Sisterponik</Link>
                <Link href="/">Sobat Warung</Link>
                <Link href="/">Pak Budi</Link>
                <Link href="/">Viregra</Link>
            </div>
        </div>
    )
}