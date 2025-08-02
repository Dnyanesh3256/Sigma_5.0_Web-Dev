import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function TodoList(){
    const [todos, setTodos] = useState([{id: uuidv4(), task: "sample", isDone: false}]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        setTodos([{id: uuidv4(), task: newTodo, isDone: false}, ...todos]);
        setNewTodo("");
    }

    const updateTodo = (e) => {
        setNewTodo(e.target.value);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const markOneAsDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if(todo.id === id){
                return{
                    ...todo,
                    isDone: true
                }
            }else{
                return todo;
            }
        }))
    }

    const markAllAsDone = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return{
                ...todo,
                isDone: true
            }
        }))
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
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => markOneAsDone(todo.id)}>Mark as Done</button>
                        <br /> <br />
                    </li>  
                ))}

                <button onClick={markAllAsDone}>Mark All as Done</button>
            </ul>
        </div>
    )
}