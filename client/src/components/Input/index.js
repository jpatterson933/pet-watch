import React from 'react';

export function Input (props) {
    return (
        <input 
            type={props.type} 
            className="form-control" 
            id={props.id} 
            placeholder={props.placeholder}
        />
    
    )
}