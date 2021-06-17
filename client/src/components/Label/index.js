import React from 'react';

export function Label(props) {
    return (
        <label 
            for={props.for}
        >

            {/* text visible on form */}
            {props.text}

        </label>
    )
}