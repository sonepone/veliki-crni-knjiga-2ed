import { useState } from 'react';
import classes from './Todos.module.css'
import "./TodosGlobal.css"

function Todos() {
    console.log('Izvrsvam Todos');
    //const [todos, setTodos] = useState(['Learn React', 'Recommend this book']);
    const [todos, setTodos] = useState(['Learn React', 'Recommend this book']);
    const [newItem, setNewItem] = useState('');
    const [count, setCount] = useState(0);
    const [boja, setBoja] = useState("black");
    function handleAddTodo() {
        //todos.push('A new todo');
        setCount((prevCount) => prevCount + 1  );
        setTodos((prev) => 
            { 
              console.log('Koliko vas je u arraye-u: ' + prev.length);
              console.log('Dodajem: ' + newItem);
              //prev.push('Novo');
              //prev = [...prev, 'Novo'];
              //prev = [...prev, newItem];
              return [...prev, newItem];
            }
            
            );
    };

    function handleChange(event){
       setNewItem(event.target.value);
    }

    function handleColorChange(event){
        console.log(event.target.value);
        setBoja(event.target.value);
    }

    //                {todos.map(todo => <li style={{backgroundColor: '#1c7a3c'}} classes={classes.rounded_li}  key={todo}>{todo}</li>)}
    return (
        <div>
            <h1>Count: {count}</h1>
            <input type='text' value={newItem} onChange={handleChange}></input>
            <div style={{'border': 'solid orange 1px'}}>
                <select name="boje" id="color-select" onChange={handleColorChange} style={{color: boja}}>
                    <option value="black">-- Izaberite boju --</option>
                    <option value="red"   style={{color: 'red'  }}>Crvena</option>
                    <option value="green" style={{color: 'green'}}>Zelena</option>
                    <option value="blue"  style={{color: 'blue' }}>Plava</option>
                </select>
                {boja}


            </div>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => <li   className={classes['rounded-li']}  key={todo + '-' + index}>{todo}</li>)}
            </ul>
        </div>
    );
};

export default Todos;