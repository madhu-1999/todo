import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TodoItem.css';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Checkbox from './Checkbox';

function TodoItem(props) {
    const { todo, todos, setTodos} = props

    function deleteTodo(todo){
        setTodos(todos.filter((item) => item.id !== todo.id))
    }
    return (
        <>
            <div className="item-container">
                <Checkbox todo={todo} todos={todos} setTodos={setTodos}/>
                <button onClick={(e)=> deleteTodo(todo)}>
                    <FontAwesomeIcon icon={faTrash} size='lg'/>
                </button>
            </div>
        </>
    )
}

export default TodoItem;