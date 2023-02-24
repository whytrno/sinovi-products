import BackIcon from "@/components/Icon/BackIcon";
import Link from "next/link";

export default function Products() {
    return (
        <div>
            {/* <Link href="/" className="rounded-md p-4 bg-primary text-white">
                <BackIcon />
                <p>Kembali</p>
            </Link> */}
            <Link href="/" className="bg-[#4154F1] flex gap-3 items-center w-min whitespace-nowrap text-white rounded-md py-2 px-5">
                <BackIcon />
                <p>Kembali</p>
            </Link>
        </div>
    )
}