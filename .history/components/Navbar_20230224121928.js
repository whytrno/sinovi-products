import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-5 2xl:px-60 shadow-xl">
            <div className="flex items-center gap-5">
                <img src="logo/ittp.png" alt="Ittp Logo" />
                <img src="logo/bdv.png" alt="BDV Logo" />
                <img src="logo/sinovi.png" alt="Sinovi Logo" />
            </div>
            <div className="font-semibold text-primary gap-4 2xl:gap-8 flex items-center">
                <Link href="/" className="text-secondary">Visi Misi</Link>
                <Link href="/">Layanan</Link>
                <Link href="/">Daftar Produk</Link>
            </div>
        </div>
    )
}