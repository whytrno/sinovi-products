import BackIcon from "@/components/Icon/BackIcon";
import Link from "next/link";

export default function Products() {
    return (
        <div className="p-10">
            <Link href="/" className="bg-[#4154F1] flex gap-5 items-center w-min whitespace-nowrap text-white rounded-md py-2 px-3">
                <BackIcon />
                <p className="text-md font-semibold">Kembali</p>
            </Link>

            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-semibold">DAFTAR PRODUK</h1>
                <p className="text-md">Ingin melhat produk kami? Coba demonya sekarang juga!</p>
            </div>

            <div className="grid grid-cols-2 gap-10">
                <div className="shadow-2xl space-y-5 p-auto rounded-lg">
                    <div className="flex justify-center">
                        <img src="./logo/products/pakbudi.png" alt="PakBudi" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold text-center text-title">PakBudi</h4>
                        <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate eros ac ante suscipit consequat. Fusce ornare rhoncus purus ac pharetra. Fusce viverra eu nisi hendrerit elementum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}