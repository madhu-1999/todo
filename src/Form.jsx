import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Form.css';
function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({value:"", id:self.crypto.randomUUID(), done:false});

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({value:"", id: self.crypto.randomUUID(), done:false});
    }

    return (
        <form className="form-container">
            <input className='input' type='text' value={todo.value} onChange={(e) => setTodo({...todo, value: e.target.value})} placeholder="Write about your next task"></input>
            <button className="submit" type="submit" onClick={(e) => handleSubmit(e)}><FontAwesomeIcon icon={faPlus} /></button>
        </form>
    )
}

export default Form;