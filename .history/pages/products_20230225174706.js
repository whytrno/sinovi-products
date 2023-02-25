import BackIcon from "@/components/Icon/BackIcon";
import Product from "@/components/Product";
import Link from "next/link";

export default function Products() {
    return (
        <div className="p-10 space-y-10">
            <Link href="/" className="bg-[#4154F1] flex gap-5 items-center w-min whitespace-nowrap text-white rounded-md py-2 px-3">
                <BackIcon />
                <p className="text-md font-semibold">Kembali</p>
            </Link>

            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-semibold">DAFTAR PRODUK</h1>
                <p className="text-md">Ingin melhat produk kami? Coba demonya sekarang juga!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <Product url="https://pakbudi.id/" logo="pakbudi" title="PakBudi" description="Merupakan aplikasi konsultasi pendidikan pertama di Indonesia." />
                <Product url="https://ternaku.id/" logo="ternaku" title="Ternaku" description="Platform investasi ternak yang menerapkan Internet Of Things (IoT) dalam proses monitoring perkembangan ternak." />
                <Product url="https://sobatwarung.com/" logo="sobatwarung" title="Sobat Warung" description="Akselerasi UMKM pedesaan melalui adopsi teknologi marketplace ritel dalam penguatan bisnis badan usaha milik desa (BUMDesa) menuju ekonomi digital." />
                <Product url="https://nyuciin.my.id/" logo="calaun" title="Calaun" description="Merupakan aplikasi yang digunakan untuk mencari dan pemesanan jasa laundry terdekat yang dapat digunakan oleh customer dan juga mitra." />
            </div>

        </div>
    )
}