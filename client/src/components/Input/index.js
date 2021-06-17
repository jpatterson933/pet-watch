import React from 'react';

export function Input (props) {
    return (
        <input 
            type={props.type} 
            class="form-control" 
            id={props.id} 
            placeholder={props.placeholder}
        />
    
    )
}