import BackIcon from "@/components/Icon/BackIcon";
import Link from "next/link";

export default function Products() {
    return (
        <div>
            <Link href="/" className="rounded-md p-4 bg-primary">
                <BackIcon />
                <p>Kembali</p>
            </Link>
        </div>
    )
}