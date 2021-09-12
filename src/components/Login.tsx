import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Label, Form } from 'reactstrap';
import { store } from './App';
import { AuthActionTypes } from '../actions/auth';
import { login } from '../services/auth';
import '../styles/login.css';

/**
 * Login component.
 * TODO: JWT for credentials but the routes are not secured.
 */
const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await login({
      email,
      password,
    });
    // console.log(data);
    if (data && data.accessToken) {
      store.dispatch({
        type: AuthActionTypes.SET_TOKEN,
        payload: {
          isAuth: true,
          token: data.accessToken,
        },
      });
      localStorage.setItem('auth', JSON.stringify({
        isAuth: true,
        token: data.accessToken,
      }));
      history.push('/taxes');
    }
  };

  return (
    <div className="login">
      <h1>Please Log In</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          <p>Email</p>
          <Input type="text" onChange={(e: any) => setEmail(e.target.value)} />
        </Label>
        <Label>
          <p>Password</p>
          <Input
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </Label>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
