import { AiTwotoneDelete, AiOutlineCreditCard } from "react-icons/ai"
import FormEdit from "./FormEdit";
export default function Student(props) {
    const { student, DeleteList, toggle_edit, toggle_complete, editId, editList } = props;
    const isEdit = editId === student.id;
    return (
        <div className="Student">
           
            {isEdit ? (
                <FormEdit value={student} editList={editList} />
            ) : (
                <>
                    <input type="checkbox" 
                    checked={student.isComplete ? true : false}
                    onChange={() => toggle_complete(student.id)}
                    />
                    <span
                        className={`${student.isComplete ? "complete" : ""}`}
                        onClick={() => toggle_complete(student.id)}
                        onDoubleClick={() => toggle_edit(student.id)}
                    >
                        {student.name}
                    </span>
                    <AiOutlineCreditCard onClick={() => toggle_edit(student.id)} />
                    <AiTwotoneDelete onClick={() => DeleteList(student.id)} />
                </>
            )}
        </div>
    )
}