import { useState, useEffect } from 'react';
function Alert() {
    const [alertDone, setAlertDone] = useState(false);
    useEffect(function () {
                            console.log('Starting Alert Timer!');
                            let mojTimer = setTimeout(function () {
                                console.log('Timer expired!');
                                setAlertDone(true);
                             }, 8000);
                             return () => {console.log("Čistimo timer!"); clearTimeout(mojTimer);}
                           }
              , []);
    return (
        <>
            {!alertDone && <p>Relax, you still got some time!</p>}
            {alertDone && <p>Time to get up!</p>}
        </>
    );
}
export default Alert;