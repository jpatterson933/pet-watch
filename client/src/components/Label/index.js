import React from 'react';

export function Label(props) {
    return (
        <label 
            htmlFor={props.for}
        >

            {/* text visible on form */}
            {props.text}

        </label>
    )
}