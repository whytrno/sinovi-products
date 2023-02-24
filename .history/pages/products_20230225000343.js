import BackIcon from "@/components/Icon/BackIcon";
import Link from "next/link";

export default function Products() {
    return (
        <div>
            {/* <Link href="/" className="rounded-md p-4 bg-primary text-white">
                <BackIcon />
                <p>Kembali</p>
            </Link> */}
            <Link href="/" className="bg-[#4154F1]">
                <BackIcon />
                <p>Kembali</p>
            </Link>
        </div>
    )
}