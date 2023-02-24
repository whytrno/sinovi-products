import BackIcon from "@/components/Icon/BackIcon";
import Link from "next/link";

export default function Products() {
    return (
        <div className="p-10">
            <Link href="/" className="bg-[#4154F1] flex gap-5 items-center w-min whitespace-nowrap text-white rounded-md py-2 px-3">
                <BackIcon />
                <p className="text-md font-semibold">Kembali</p>
            </Link>

            <div className="space-y-2">
                <h1 className="text-2xl">DAFTAR PRODUK</h1>
                <p className="text-md">Ingin melhat produk kami? Coba demonya sekarang juga!</p>
            </div>
        </div>
    )
}