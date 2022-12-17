import { useState } from "react";
import PropTypes, { func } from 'prop-types';


export const CounterApp = ({ value }) => {

    console.log('{Render}');
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter( (c) => c+1 );
    const handleSubstract = () => setCounter( counter -1 );
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSubstract}>
                -1
            </button>
            <button onClick={handleReset}>
                Resetet
            </button>
        </>);
};

CounterApp.prototype = {
    value: PropTypes.number
}