import { useFormStatus } from 'react-dom';
import { useState } from 'react';
import SubmitButton from './components/SubmitButton_253';


let storedTodos = [];
export async function saveTodo(todo) {
    // dummy function that simulates a slow backend which manages todos
    await new Promise((resolve) => setTimeout(resolve, 6000));
    const newTodo = { ...todo, id: new Date().getTime() };
    storedTodos = [...storedTodos, newTodo];
    return storedTodos;
}

function App() {
    const [todos, setTodos] = useState(storedTodos);
    async function storeTodoAction(formData) {
        const todo = { title: formData.get('title') };
        const updatedTodos = await saveTodo(todo); // takes 3s
        setTodos(updatedTodos);
    }
    return (
        <>
            <form action={storeTodoAction}>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </p>
                <p className="actions">
                    <SubmitButton />
                </p>
            </form>
            <div id="todos">
                <h2>My Todos</h2>
                {todos.length === 0 && <p>No todos found.</p>}
                {todos.length > 0 && (
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>{todo.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}


export default App;