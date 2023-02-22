export default function Card({ logo, desc }) {
    return (
        <div>
            <div className="flex items-center shadow-lg p-7 gap-5 text-paragraph rounded-md">
                <img src={logo} className="h-24 w-24" />
                <p>{desc}</p>
            </div>
        </div>
    )
}