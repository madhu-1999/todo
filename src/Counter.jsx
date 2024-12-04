import './Counter.css';
function Counter({todos}){
    const completed = todos.filter((todo) => todo.done == true).length;
    const total = todos.length;
    return(
        <div className='counter-container'>
            <p>Todos done</p>
            <span className="circle"><p>{completed}/{total}</p></span>
        </div>
    )
}

export default Counter;