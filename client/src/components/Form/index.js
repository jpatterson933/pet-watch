import React from 'react';
import { Label } from "../Label"; 
import { Input } from "../Input";
import { Button } from "../Button";

export function Form() {
    return (
        <div>
            <Label
                for="pet-name"
                text="Pet Name"
            />
            <Input
                type="text"
                id="pet-name"
                placeholder="Enter your pet's name"
            ></Input>
            <Label
                for="password"
                text="Enter Password"
            />
            <Input
                type="password"
                id="password"
                placeholder="Enter Password"
            />
            <Button
                label="Start Tracking your Pet"
                id="new-pet"
            >
            </Button>
        </div>
    )
}