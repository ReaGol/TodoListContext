import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoProvider";
import styled from "styled-components";

const TodoListStyled = styled.ul`
  background-color: #b47978;
  color:white;
  font-family: Arial, sans-serif;
  list-style: none;
  width: 250px;
  margin: 0 auto;
  border-radius: 5px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 0.8em;
  margin: 2px;
  padding: 1px 2px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function TodoList() {
  const { todos, deleteTodo, toggleIsCompleted } = useContext(TodoContext);

  return (
    <TodoListStyled>
      {todos.map((todo, index) => (
        <li key={index}>
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
            onClick={() => toggleIsCompleted(index)}
          >
            {todo.text}
          </span>
          <Button primary onClick={() => deleteTodo(index)}>Delete</Button>
        </li>
      ))}
    </TodoListStyled>
  );
}

export default TodoList;
