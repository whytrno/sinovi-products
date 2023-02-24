export default function Card({ logo, desc }) {
    return (
        <div className="flex flex-col sm:flex-row items-center shadow-lg p-7 gap-5 text-paragraph rounded-md">
            <img src={logo} className="h-24 w-24" />
            <p className="text-center sm:text-left">{desc}</p>
        </div>
    )
}