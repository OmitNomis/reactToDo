import React from "react";


const Form = ({ value, setValue, list, setList }) => {

    const inputText = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };
    const submitList = (e) =>{
        e.preventDefault();
        setList([
            ...list, {text: value, completed:false, id:Math.random()*1000}
        ]);
        setValue("");
    }

    return(
        <form>
            <input value={value} onChange={inputText} type="text" className="input"/>
            <button onClick={submitList} className= "addButton" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
};

export default Form;