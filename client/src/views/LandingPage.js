import React, { useState } from 'react';
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import API from "../utils/API";

export function SignUp() {
    const [pet, setPet] = useState({
        petName: "",
        password: "",
        confirmPassword: "",
    })

    function handleFormSubmit(event) {
        event.preventDefault()
        const { password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwods don't match")
        } else {
            API.saveUser({
                petName: pet.petName,
                password: pet.password
            })
        }
    };

    function handleInputChange(event) {
        const newPet = { ...pet }
        newPet[event.target.name] = event.target.value
        setPet(newPet)
    };

    return (
        <div>
            <form className="signup" >
                <h3 className="signup">Sign Up</h3>
                <Input
                    name="petname"
                    type="text"
                    placeholder="Pet Name"
                    onChange={(event) => handleInputChange(event)}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    onChange={(event) => handleInputChange(event)}
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-Enter Password"
                    onChange={(event) => handleInputChange(event)}
                />
                <Button
                    name="signup"
                    type="submit"
                    label="Sign Up"
                    className="buttonsignup btn-primary btn-block my-5 text-center rounded"
                    onClick={handleFormSubmit}
                />
            </form>
        </div>
    );
}