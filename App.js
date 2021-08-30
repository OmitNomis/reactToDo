import React, {useState} from "react";
import './App.css';

//importing form and list
import Form from "./components/Form";
import List from "./components/list";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form list = {list} setList = {setList} value = {value} setValue = {setValue}/>
      <List setList = {setList} list = {list}/>
    </div>
  );
}

export default App;
