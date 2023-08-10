import { useState } from "react";
import { createAuthWithEmailAndPassword } from "../../utilities/utility/firebase.utility";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    
    const [formField, setFormField] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formField;

    console.log(formField)

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(password !== confirmPassword) {
            alert('Password do no match') 
            return;
        }

        try{
            const {user} = await createAuthWithEmailAndPassword(
                email,
                password
            )
        }
        catch(error) {
            console.log('user creation encoutered an error', error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value})
    }

    return ( 
        <div>
            <h2>Sign up with your email and password</h2>
            <form onSubmit={() => {}}>
            <label>Display Name</label>
            <input 
            type='text' 
            name='displayName'
            onChange={handleChange}
            value={displayName}            
            required />
            <label>Email</label>
            <input 
            type='text' 
            name='Email'
            onChange={handleChange}      
            value={email}
            required />
            <label>Password</label>
            <input 
            type='text' 
            name='Password'
            onChange={handleChange}
            value={password}
            required />
            <label>Confirm Password</label>
            <input 
            type='password' 
            name='ConfirmPassword'
            onChange={handleChange}
            value={confirmPassword}
            required />
            <button type="submit">Sign Up</button>
            </form>
        </div>
     );
}
 
export default SignUp;