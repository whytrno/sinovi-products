import List from "./List";

function content(title, desc, lists) {
    return (
        <div className="space-y-2 w-1/2">
            <h1 className="text-3xl text-primary font-semibold">{title}</h1>
            <p>{desc}</p>
            {lists.map(list => (
                <List title={list} />
            ))}
        </div>
    )
}
function image(img) {
    return (
        <div>
            <img src={img} />
        </div>
    )
}

export default function Child({ dirrection, title, desc, img, lists }) {
    return (
        <div className="flex justify-between text-lg text-paragraph items-center">
            {dirrection == 'right' ? (
                <>
                    {image(img)}
                    {content(title, desc, lists)}
                </>
            ) : (
                <>
                    {content(title, desc, lists)}
                    {image(img)}
                </>
            )}
        </div>
    )
}