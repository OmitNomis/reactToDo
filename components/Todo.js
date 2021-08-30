import React from "react";

const Todo = ({todo, text,list, setList}) =>{
    
    const remove = () =>{
        setList(list.filter((el) => el.id !== todo.id));
    };

    const complete = () =>{
        setList(list.map(item => {
            if (item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={complete} className="completeButton"><i className = "fas fa-check"></i></button>
            <button onClick={remove} className = "removeButton"><i className = "fas fa-trash"></i></button>
        </div>
    );

};

export default Todo;