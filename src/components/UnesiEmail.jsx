
import {useState, useRef}  from 'react';
import classes from './UnesiEmail.module.css';

function EmailForm() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const emailFieldRef = useRef();
    console.log(enteredEmail);
    function handleUpdateEmail(event) {
        setEnteredEmail(event.target.value);
    }
    function handleSubmitForm(event) {
        event.preventDefault();
        console.log(`>${emailFieldRef.current.value}<nbanka `);
        // could send enteredEmail to a backend server
    }

    //<form className={classes.form} onSubmit={handleSubmitForm}></form>
    //<input className={classes['form-field']} type="email" id="email" onChange={handleUpdateEmail} />

    return (
        <form className={classes.form} onSubmit={handleSubmitForm}>
            <label htmlFor="email">Your email</label>
            <input ref={emailFieldRef} className={classes['form-field']} type="email" id="email"/>
            <button className={classes['form-button']}>Save</button>
        </form>
    );
}

export default EmailForm;