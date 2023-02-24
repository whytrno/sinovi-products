import CheckIcon from "../Icon/CheckIcon";

export default function List({ title }) {
    return (
        <div className="flex gap-5">
            <CheckIcon className="w-[10%]" />
            <p className="w-[90%]">{title}</p>
        </div>
    )
}