import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoProvider";
import styled from "styled-components";

const TodoListStyled = styled.ul`
  background-color: #f1f1f1;
  font-family: Arial, sans-serif;
  list-style: none;
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
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </TodoListStyled>
  );
}

export default TodoList;
