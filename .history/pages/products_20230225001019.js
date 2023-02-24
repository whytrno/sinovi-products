import BackIcon from "@/components/Icon/BackIcon";
import Link from "next/link";

export default function Products() {
    return (
        <div className="p-10">
            <Link href="/" className="bg-[#4154F1] flex gap-3 items-center w-min whitespace-nowrap text-white rounded-md py-2 px-3">
                <BackIcon />
                <p className="text-md font-semibold">Kembali</p>
            </Link>
        </div>
    )
}