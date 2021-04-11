import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer';

export const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch((error) => alert(error))
    }
    return (
        <div className='login'>
            <div className="login-logo">
                <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png' alt='facebook logo' />

                <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='facebook' />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}
