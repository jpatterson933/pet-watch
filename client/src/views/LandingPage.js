import React from 'react';
import { Form } from '../components/Form';
import { Label } from "../components/Label"; 
import { Input } from "../components/Input";
import { Button } from "../components/Button";


export function LandingPage() {
    return (
        <div>
            <h1>Pet Watch</h1><h4>Sign up</h4>
            <form>
                <Label
                    for="pet-name"
                    text="Pet Name"
                />
                <Input
                    type="text"
                    id="pet-name"
                    placeholder="Enter your pet's name"
                />
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
                />
            </form>
        </div>
    )
}