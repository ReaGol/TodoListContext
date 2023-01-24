import './App.css';
import {TodoProvider} from './TodoProvider'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoProvider>
        <TodoForm/>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
