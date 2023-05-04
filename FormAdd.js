import { useState } from "react";
export default function FormAdd(props) {
    const [text, setText] = useState("");
    return (
        <div>
            <form
                className="FormAdd"
            // onSubmit={(e) => {
            //     e.preventDefault();
            //     props.addList(text);
            //     setText("");
            // }}
            >
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                <button onClick={(e) => {
                    e.preventDefault();
                    props.addList(text);
                    setText("");
                }}>Add</button>
            </form>

        </div>
    );
}