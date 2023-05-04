import Student from "./Student";
import {useState} from "react";
import FormAdd from "./FormAdd";
import Footer from "./Footer";
import uuid from "react-uuid";
export default function StudentList() {
    const [editId, setditId] = useState("")
    const [flag,setFlag] = useState("fillAll");
    const [list, setList] = useState([
        {
            id: 1,
            name: "The Summer",
            isComplete: false,
            isEdit: false,
        },
        {
            id: 2,
            name: "The Fall",
            isComplete: false,
            isEdit: false,
        },
        {
            id: 3,
            name: "The Spring",
            isComplete: true,
            isEdit: true,
        }
    ]);
    console.log(list);
    
    const addList = (textName) => {
        setList([...list,{id: uuid(), name: textName, isComplete: false}]);
    }
    const DeleteList = (id) => {
        const newList = list.filter((stu) => stu.id !== id); // Xoa chuoi het
        setList(newList);
    }
    ///+++++++++++++++++++++++++++++++
    const editList = (id,name) => {
        setList(
            list.map((value) => 
                value.id === id ? {...value, name, isEdit: false} : value
            )
        );
        setditId("");
    };
    const toggle_edit = (id) => {
       setditId(id);
    };
    const toggle_complete = (id) => {
        setList(
            list.map((value) =>
            value.id === id ? {...value, isComplete: !value.isComplete } : value
            )
        );
    };

    //++++++++++++++++
    const getList = (stuList, flag) => {
        if (flag === "fillAll") {
            return stuList;
        } else if (flag === "fillNoChecked") {
            return stuList.filter((item) => !item.isComplete);
        } else if (flag === "fillChecked") {
            return stuList.filter((item) => item.isComplete);
        } else {
            return stuList;
        }
    };
    //+++++++++++++++++
    const fillAll= () => {
        console.log("meo");
        setFlag("fillAll");
    }
    const fillNoChecked = () => {
        console.log("meo");
        setFlag("fillNoChecked")
    }
    const fillChecked = () => {
        console.log("meo");
        setFlag("fillChecked")
    }
    const RemoveChecked = () => {
        
        const newlist = list.filter((item) => !item.isComplete);
        setList(newlist);
    }
    return (  
        <div className="StudentList">
            <h1>TodoList</h1>
            <FormAdd addList={addList} />
            {getList(list, flag).map((value,index) => 
           (
                <Student 
                student={value} 
                DeleteList={DeleteList} 
                key={index}
                toggle_edit={toggle_edit}
                toggle_complete={toggle_complete}
                editId={editId}
                editList={editList}
                />
            ))}
            <Footer
                fillAll={fillAll}
                fillNoChecked={fillNoChecked}
                fillChecked={fillChecked}
                RemoveChecked={RemoveChecked}
            />
        </div>
    );
}