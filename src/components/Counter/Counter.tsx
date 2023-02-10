import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [state, setState] = useState(0)

    const onClick = () => {
        setState(state + 1)
    }

    return (
        <div>
            <h1 className={classes.btt}>{state}</h1>
            <button  onClick={onClick}>click</button>
        </div>
    );
};

export default Counter;
