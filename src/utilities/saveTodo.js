async function saveTodo(todo) {
    console.log('standalone saveTodo - prije Promise-a');
    // dummy function that simulates a slow backend which manages todos
    await new Promise((resolve) => setTimeout(resolve, 15000)); // delay
    console.log('standalone saveTodo - Simulirani backend delay zavrsen. Sad saljemo HTTP request...');    
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    );
    console.log('standalone saveTodo - Zavrseno slanje HTTP request-a...');    
    const fetchedTodo = await response.json();
    // console.log(fetchedTodo);
    console.log('standalone saveTodo - =================================');
}

export default saveTodo;