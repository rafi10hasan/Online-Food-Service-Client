import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import { FaGoogle} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err => console.error(err));
    }

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    
   
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='container'>
            <h1 className='text-center fw-bold mt-5 mb-3'>Please Sign up</h1>
            <Form onSubmit={handleSignUp} className="bg-login py-4 px-4 w-75 w-sm-100 container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
    
            <Button variant="primary" type="submit">
                Register
            </Button>
           
             <div className='mt-4 text-center'>
             <Button onClick={handleGoogleSignIn} className='mb-3 px-5 text-center' variant="dark"><FaGoogle></FaGoogle> sign up with Google</Button> <br/>
            
             </div>
             <p className='text-center'>Already Have an Account? <Link className='text-orange-600 font-bold text-decoration-none fw-bold' to="/Login">Login</Link> </p>
        </Form>
        </div>
    );
};

export default Signup;