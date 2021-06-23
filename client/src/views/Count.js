import React, { useState } from 'react';

export function Counter() {
    //the only argument passed to the useState is the initial state
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times!</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}