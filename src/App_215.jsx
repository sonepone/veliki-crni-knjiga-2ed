import { useState } from 'react';
import Alert from './components/Alert_214.jsx';
function App() {
    const [showAlert, setShowAlert] = useState(false);
    function handleShowAlert() {
        // state updating is done by passing a function to setShowAlert
        // because the new state depends on the previous state (it's the opposite)
        setShowAlert((isShowing) => !isShowing);
    }
    return (
        <>
            <button onClick={handleShowAlert}>
                {showAlert ? 'Hide' : 'Show'} Alert
            </button>
            {showAlert && <Alert />}
        </>
    );
}
export default App;