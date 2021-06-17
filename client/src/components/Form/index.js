import React from 'react';
import { Label } from "../Label"; 
import { Input } from "../Input";
import { Button } from "../Button";

export function Form() {
    return (
        <div>
            <Label
                for="test"
                text="test"
            />
            
            <Input
                type="text"
                id="test"
                placeholder="testing"
            ></Input>
            <Button
                label="Test Button"
            >
            
            </Button>
        </div>
    )
}