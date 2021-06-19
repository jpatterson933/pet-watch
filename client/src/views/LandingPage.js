import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
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
        API.saveUser({
            petName: pet.petName,
            password: pet.password
        })
            .then(res => {
                localStorage.setItem("pet", JSON.stringify(res.data))
            })
    };

    function handleInputChange(event) {
        const newpet = { ...pet }
        newpet[event.target.name] = event.target.value
        setPet(newpet)
    };

    return (
        <div>
            <form className="signup" >
                <h3 className="signup">Sign Up</h3>
                <Input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    onChange={(event) => handleInputChange(event)}
                />
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
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
                    className="buttonsignup btn-primary btn-block my-5 text-center rounded"
                    onClick={handleFormSubmit}
                />
                <div className="text-center">
                    <p>Already have an account? Log in below!</p>
                    {/* <p>or log in with:
              <Google />
            </p> */}
                </div>
            </form>
        </div>
    );
}


// export function LandingPage() {
//     return (
//         <div>
//             <h1>Pet Watch</h1><h4>Sign up</h4>
//             <form>
//                 <Label
//                     for="pet-name"
//                     text="Pet Name"
//                 />
//                 <Input
//                     type="text"
//                     id="pet-name"
//                     placeholder="Enter your pet's name"
//                 />
//                 <Label
//                     for="password"
//                     text="Enter Password"
//                 />
//                 <Input
//                     type="password"
//                     id="password"
//                     placeholder="Enter Password"
//                 />
//                 <Button
//                     label="Start Tracking your Pet"
//                     id="new-pet"
//                 />
//             </form>
//         </div>
//     )
// }