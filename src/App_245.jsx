function App() {
  async function storeTodoAction(formData) {
    const todoTitle = formData.get('title');
    const todoTitle2 = formData.get('title2');


      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ title: todoTitle, title2: todoTitle2 }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const todo = await response.json();
    console.log(todo);

  }




  return (
    <>
      <form action={storeTodoAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p>
          <label htmlFor="title2">Title - 2</label>
          <input type="text" id="title2" name="title2" />
        </p>


        <p className="actions">
          <button>Store Todo</button>
        </p>
      </form>
    </>
  );
}

export default App;