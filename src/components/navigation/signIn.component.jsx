import { signInWithGooglePopup, createUserDocFromAuth } from '../../utilities/utility/firebase.utility';
import SignUp from '../signUp form/signUp.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocFromAuth({user})
    };

    return ( 
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <div>
                <SignUp />.
            </div>
        </div>
    )
}
 
export default SignIn;