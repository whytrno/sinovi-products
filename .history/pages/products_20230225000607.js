import BackIcon from "@/components/Icon/BackIcon";
import Link from "next/link";

export default function Products() {
    return (
        <div className="p-10">
            {/* <Link href="/" className="rounded-md p-4 bg-primary text-white">
                <BackIcon />
                <p>Kembali</p>
            </Link> */}
            <Link href="/" className="bg-[#4154F1] flex gap-3 items-center w-min whitespace-nowrap text-white rounded-sm py-2 px-3">
                <p>Kembali</p>
            </Link>
        </div>
    )
}