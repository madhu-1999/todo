import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Counter from "./Counter";

function Todo() {
    
    const [todos, setTodos] = useState([]);
    return (
        <>
            <Counter todos={todos}/>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </>

    )
}

export default Todo;