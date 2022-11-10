import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      login(email, password)
          .then(result => {
              const user = result.user;


              const currentUser = {
                  email: user.email
              }

              console.log(currentUser);

              // get jwt token
              fetch('https://cloud-kitchen-tau.vercel.app/jwt', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json' 
                  },
                  body: JSON.stringify(currentUser)
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data);
                      // local storage is the easiest but not the best place to store jwt token
                      localStorage.setItem('cloud-kichen', data.token);
                      navigate(from, { replace: true });
                  });
              
          })
          .catch(error => console.log(error));
  }

    return (
        <div className='container'>
            <h1 className='text-center fw-bold mt-4 mb-3'>Please Login</h1>
             <Form onSubmit={handleLogin} className="bg-login py-4 px-4 w-75 w-sm-100 container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p className='text-center'>create an Account? <Link className='font-bold text-decoration-none fw-bold' to="/signup">Sign Up</Link> </p>
    </Form>
        </div>
    );
};

export default Login;