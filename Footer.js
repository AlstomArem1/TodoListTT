export default function Footer (props) {
    const btnList = [
        {
            id: 1,
            name: "filter all",
            handleClick: () => props.fillAll(),
        },
        {
            id: 2,
            name: "Remove checked",
            handleClick: () => props.RemoveChecked(),
        },
        {
            id: 3,
            name: "filter checked",
            handleClick: () => props.fillChecked(),
        },
        {
            id: 4,
            name: "filter nochecked",
            handleClick: () => props.fillNoChecked(),
        },
    ];
    return (
        <div className="footer">
            {btnList.map((item,key) => (
                <button key={key} onClick={item.handleClick}>
                    {item.name}
                </button>
            ))}
        </div>
    );
}