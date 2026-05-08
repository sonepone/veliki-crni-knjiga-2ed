import { useState } from 'react';
import { add, differenceInDays, format, parseISO } from 'date-fns';
import classes from './DateCalculator_285.module.css';
const initialStartDate = new Date();

const initialEndDate = add(initialStartDate, { days: 1 });
function DateCalculator( {onIncrement, onClose} ) {
    const [startDate, setStartDate] = useState(
        format(initialStartDate, 'yyyy-MM-dd')
    );
    const [endDate, setEndDate] = useState(
        format(initialEndDate, 'yyyy-MM-dd')
    );
    const daysDiff = differenceInDays(
        parseISO(endDate),
        parseISO(startDate)
    );
    function handleUpdateStartDate(event) {
        setStartDate(event.target.value);
    }
    function handleUpdateEndDate(event) {
        setEndDate(event.target.value);
        onIncrement();
    }
    return (
        <div className={classes.calculator}>
            <p>Calculate the difference (in days) between two dates.</p>
            <div className={classes.control}>
                <label htmlFor="start">Start Date</label>
                <input
                    id="start"
                    type="date"
                    value={startDate}
                    onChange={handleUpdateStartDate}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor="end">End Date</label>
                <input
                    id="end"
                    type="date"
                    value={endDate}
                    onChange={handleUpdateEndDate}
                />
            </div>
            <p className={classes.difference}>
                Difference: {daysDiff} days
            </p>
            <button onClick={onClose}>Close Calculator</button>
        </div>
    );
}
export default DateCalculator;