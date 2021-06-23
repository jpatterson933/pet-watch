import React, { useEffect, useState } from 'react';
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import API from "../utils/API";

export function SignUp() {
    const [pet, setPet] = useState({
        petName: "",
        password: "",
    })

    function handleFormSubmit(event) {
        event.preventDefault()
        // const { password, confirmPassword } = this.state;
        // if (password !== confirmPassword) {
        //     alert("passwords don't match")
        // }
        API.savePet({
            petName: pet.petName,
            password: pet.password
        })
        console.log("petsaved")
    };

    function handleInputChange(event) {
        const newPet = { ...pet }
        newPet[event.target.name] = event.target.value
        setPet(newPet)
    };

    useEffect(() => {
        document.title = `${pet.petName}`
    })

    return (
        <div>
            <form className="signup" >
                <h3 className="signup">Sign Up</h3>
                <Input
                    name="petName"
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
                <Button
                    name="signup"
                    type="submit"
                    label="Sign Up"
                    value="Submit"
                    className="buttonsignup btn-primary btn-block my-5 text-center rounded"
                    onClick={handleFormSubmit}
                />
            </form>
        </div>
    );
}

