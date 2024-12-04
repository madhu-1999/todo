import { useEffect, useState } from "react";

function Checkbox({ todo, todos, setTodos }) {

    function checkHandler() {
        setTodos(
            todos.map((item) => item.id == todo.id
                ? { ...todo, done: !todo.done }
                : item
            )
        )
    }

    return (
        <>
            <input type='checkbox' id={todo.id} checked={todo.done} onChange={checkHandler}></input>
            {todo.done ?
                <label htmlFor={todo.value} className="complete"><s>{todo.value}</s></label> :
                <label htmlFor={todo.value}>{todo.value}</label>
            }
        </>
    )
}

export default Checkbox;