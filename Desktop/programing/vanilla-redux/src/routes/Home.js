import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo } from "../store";

function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onDelete = (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    dispatch(deleteToDo(targetId));
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text)
    dispatch(addToDo(text))
    setText("")
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button onSubmit={onSubmit}>Add</button>
      </form>
      <ul>
        {toDos.map((item) => (
            <li key={item.id} id={item.id}>{item.text} <button onClick={onDelete}>DEL</button></li>
        ))}
      </ul>
    </>
  )
}

export default Home


/**
 * connect()
 * components들을 store에 연결 시켜준다.
 * 
 * mapStateToProps(state, ownProps?)
 * 
 */