export default function Product() {
    return (
        <Link href="/" className="shadow-2xl space-y-5 px-10 py-14 rounded-lg">
            <div className="flex justify-center">
                <img src="./logo/products/pakbudi.png" alt="PakBudi" />
            </div>
            <div className="space-y-2">
                <h4 className="text-2xl font-semibold text-center text-title">PakBudi</h4>
                <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate eros ac ante suscipit consequat. Fusce ornare rhoncus purus ac pharetra. Fusce viverra eu nisi hendrerit elementum.</p>
            </div>
        </Link>
    )
}