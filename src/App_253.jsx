import SubmitButton from "./components/SubmitButton_253";
import saveTodo from "./utilities/saveTodo";


function App() {
    console.log('App se izvrsava...');
    async function myFormAction(formData) {
        const todo = {
            title: formData.get('title'),
        };
        console.log('Prije poziva saveTodo');
        await saveTodo(todo);
        console.log('Nakon poziva saveTodo');
        
    }


    
    // console.log("Prije useActionState");
    // const [formState, formAction, pending] = useActionState(storeTodoAction, {
    //     error: null,
    // });
    // console.log("Nakon useActionState");
    // console.log('App se izvrsava => pending:', pending);
    return (
        <form action={myFormAction}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
            </p>
            <p className="actions">
               <SubmitButton />
            </p>
        </form>
    );
}

export default App;
