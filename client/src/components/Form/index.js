import React from 'react';
import { Label } from "../Label"; 
import { Input } from "../Input";
import { Button } from "../Button";

export function Form() {
    return (
        <div>
            <Label
                for="test"
                text="Pet Name"
            />
            <Input
                type="text"
                id="test"
                placeholder="Enter your pet's name"
            ></Input>
            <Button
                label="Start Tracking your Pet"
            >
            </Button>
        </div>
    )
}