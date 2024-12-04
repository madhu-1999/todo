import TodoItem from "./TodoItem";
import './TodoList.css';
function TodoList({ todos, setTodos}) {
    const sortedTodos = todos.slice().sort((a,b) => Number(a.done) - Number(b.done));

    return (
        <div className="items-container">{sortedTodos.map((todo) =>
            <TodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />)}
        </div>
    )
}

export default TodoList;