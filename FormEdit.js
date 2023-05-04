import {useState} from "react";
export default function FormEdit ({editList, value}) {
    const [text, setText] = useState(value.name);
    const handle_edit = (e) => {
        e.preventDefault();
        editList(value.id, text);
        setText("");
    };
    return (
        <form onSubmit={handle_edit} className="editForm">
            <input
            type="text"
            placeholder="Enter Your Name"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ></input>
        </form>
    );
}