import React from 'react';

export function Button(props) {
    return (
        <button 
            type="button" 
            className="btn btn-outline-dark"
            id={props.id}
        >
            {props.label}
        </button>
    )
}