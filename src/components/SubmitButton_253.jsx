import { useFormStatus } from "react-dom";

function SubmitButton(){
    console.log('SubmitButton se izvrsava...');
    //const {pending} = useFormStatus();
    const status = useFormStatus();
    const pending = status.pending;
    console.log('SubmitButton - pending:', pending);
    console.log('Cega sve ima u statusu:', status);
    const title2 = status.data ? status.data.get('title') : null;
    console.log(`A title je >${title2}<`);


    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit obicni'}
        </button>
    );  

}

export default SubmitButton;

