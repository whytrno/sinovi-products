import CheckIcon from "../Icon/CheckIcon";

export default function List({ title }) {
    return (
        <div className="flex gap-5">
            <CheckIcon />
            <p>{title}</p>
        </div>
    )
}