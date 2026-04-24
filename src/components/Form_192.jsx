import {useState} from 'react';
import classes from './Form_192.module.css';
import Preferences from './Preferences_192';

function Form_192() {
    const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
    const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);
    function handleUpdateProdInfo(selection) {
console.log(`Okinula metoda: "handleUpdateProdInfo" u Form_192 selection >${selection}<`)        
        // using one shared update handler function is optional
        // you could also use two separate functions (passed to Preferences) as props
        if (selection === 'pref-new') {
            setWantsNewProdInfo((prevPref) => !prevPref);
        } else if (selection === 'pref-updates') {
            setWantsProdUpdateInfo((prevPref) => !prevPref);
        }
    }
    function reset() {
        setWantsNewProdInfo(false);
        setWantsProdUpdateInfo(false);
    }
    function handleSubmit(event) {
        event.preventDefault();
        // state values can be used here
        reset();
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.formControl}>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" />
            </div>
            <Preferences
                newProdInfo={wantsNewProdInfo}
                prodUpdateInfo={wantsProdUpdateInfo}
                onUpdateInfo={handleUpdateProdInfo}
            />
            <button>Submit</button>
        </form>
    );
}


export default Form_192;