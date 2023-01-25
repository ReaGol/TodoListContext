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
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 2px;
  padding: 1px 2px;
  border: 2px solid palevioletred;
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
      <Button type='submit'>Add</Button>
    </form>
  );
}

export default TodoForm;
