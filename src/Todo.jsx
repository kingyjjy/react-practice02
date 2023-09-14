import React, {useState} from 'react'

const Todo = (props) => {
    const [input , setInput] = useState('');
    const [todolist, setTodolist] = useState([]);
    const handleInputChange = (e) => {
        setInput(e.target.value);
      }
    const handleTodoList = () => {
        setTodolist((prevState) => {
            console.log('이전 state: ' + prevState);
            setInput('');
            return [input, ...prevState];
        })
    }
    
  return (
    <div>
        <h1>{props.title}</h1>
        <input type='text' value={input} onChange={handleInputChange} />
        <button onClick={handleTodoList}>등록</button>
        <ul className='todo'> 
        { 
            todolist.map((todo, idx) => {
             return <li key={idx}>{todo}</li>
            })
           
        }
        
      </ul>
    </div>
  )
}

export default Todo