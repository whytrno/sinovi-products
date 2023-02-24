export default function Product({ url, logo, title, description }) {
    return (
        <a href={url} target="_blank" className="border border-slate-200 shadow-lg space-y-5 px-10 py-14 rounded-lg">
            <div className="flex justify-center">
                <img src={`./logo/products/${logo}.png`} alt={title} />
            </div>
            <div className="space-y-2">
                <h4 className="text-2xl font-semibold text-center text-title">{title}</h4>
                <p className="text-paragraph text-center">{description}</p>
            </div>
        </a>
    )
}