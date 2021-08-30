import React from "react";
import Todo from "./Todo";


const List = ({list, setList}) => {

    return (
        <div className = "listContainer">
            <ul className="list">
                {list.map((todo) =>(
                    <Todo todo = {todo} key={todo.id} text={todo.text} list = {list} setList={setList}/>
                ))}
            </ul>
        </div>
    );
};

export default List;