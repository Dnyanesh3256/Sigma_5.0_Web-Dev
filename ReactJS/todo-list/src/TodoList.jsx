import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function TodoList(){
    const [todos, setTodos] = useState([{id: uuidv4(), task: "sample"}]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        setTodos([{id: uuidv4(), task: newTodo}, ...todos]);
        setNewTodo("");
    }

    const updateTodo = (e) => {
        setNewTodo(e.target.value);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return(
        <div>
            <h2>Todo List</h2>
            <input type="text" placeholder="Enter Task" value={newTodo} onChange={updateTodo} />
            <br /> <br />
            <button onClick={addTodo}>Add Task</button>

            <br /> <br /> <hr />

            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <br /> <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}