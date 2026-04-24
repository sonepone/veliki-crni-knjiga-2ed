import { useActionState } from 'react';

async function saveTodo(todo) {
    console.log('saveTodo - Usao u saveTodo...', todo);
    // dummy function that simulates a slow backend which manages todos
    await new Promise((resolve) => setTimeout(resolve, 15000)); // delay
    console.log('saveTodo - Simulirani backend delay zavrsen. Sad saljemo HTTP request...');    
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    );
    console.log('saveTodo - Zavrseno slanje HTTP request-a...');    
    const fetchedTodo = await response.json();
    // console.log(fetchedTodo);
    console.log('saveTodo - =================================');
}


function App() {
    console.log('App se izvrsava...');
    


    async function storeTodoAction(prevState, formData) {
console.log('storeTodoAction - zapoceo');
        const todoTitle = formData.get('title');
        if (!todoTitle || todoTitle.trim() === '') {
            return {
                error: 'Title must not be empty.',
            };
        }
console.log('storeTodoAction - prije poziva saveTodo');
        await saveTodo({ title: todoTitle });
console.log('storeTodoAction - nakon poziva saveTodo');
        // sending HTTP request etc...
// console.log('Simulating network request with 3s delay...');    
//         await new Promise((resolve) => setTimeout(resolve, 8000));
// console.log('Simulated network request done. Submission done!');        


        return {
            error: null,
        };
    }
    
    console.log("Prije useActionState");
    const [formState, formAction, pending] = useActionState(storeTodoAction, {
        error: null,
    });
    console.log("Nakon useActionState");
    console.log('App se izvrsava => pending:', pending);
    return (
        <form action={formAction}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
            </p>
            {formState.error && <p className='errors'>
                {formState.error}
            </p>}
            <p className="actions">
                <button disabled={pending}>{pending ? 'Saving...' : 'Store Todo'}</button>
            </p>
        </form>
    );
}

export default App;