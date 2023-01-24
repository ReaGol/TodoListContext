import React from "react";
import { useState, useContext } from "react";
import { TodoContext } from "../TodoProvider";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: 1px solid black;
  border-radius: 3px;
`;

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add a todo'
      />
      <button type='submit'>Add</button>
    </form>
  );
}

export default TodoForm;
