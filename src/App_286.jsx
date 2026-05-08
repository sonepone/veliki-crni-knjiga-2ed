import { useState, Suspense, lazy } from 'react';
//import DateCalculator from './components/DateCalculator_285.jsx';

const DateCalculator = lazy(() => import(
'./components/DateCalculator_285.jsx'
)
);

function App() {
    const [showDateCalc, setShowDateCalc] = useState(false);

    const [brojac, setBrojac] = useState(0);

    const handleBrojac = () => {
        setBrojac((prevBrojac) => prevBrojac + 1);
    };

    function handleOpenDateCalc() {
        setShowDateCalc(true);
    }

    function handleCloseDateCalc() {
        setShowDateCalc(false);
    };

    return (
        <>
            <p>This app might be doing all kinds of things.</p>
            <p>
                But you can also open a calculator which calculates
                the difference between two dates.
            </p>
            <button onClick={handleOpenDateCalc}>Open Calculator</button>
            {/* {showDateCalc && <DateCalculator />} */}
            <Suspense fallback={<p>Loading...</p>}>
                {showDateCalc && <DateCalculator onIncrement={handleBrojac} onClose={handleCloseDateCalc}    />}
            </Suspense>
        </>
    );
}
export default App;