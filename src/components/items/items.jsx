

const Items = ({img , title , open}) => {
    return (
        <div className="flex gap-2 hover:bg-gray-600 p-2 rounded-[10px]">
        <img src={img} alt="" />
        {open && <span>{title}</span>}
        </div>
    )
}

export default Items