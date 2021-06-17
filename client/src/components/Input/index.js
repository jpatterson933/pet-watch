import React from 'react';

function Input () {
    return (
        <input 
            type={props.type} 
            class="form-control" 
            id={props.id} 
            placeholder={props.placeholder}
        />
    
    )
}

export default Input;