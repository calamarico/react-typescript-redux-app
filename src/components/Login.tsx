import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Label, Form } from 'reactstrap';
import '../styles/login.css';

interface Credentials {
  email: string;
  password: string;
}

async function loginUser(credentials: Credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

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
    const data = await loginUser({
      email,
      password,
    });
    // console.log(data);
    if (data && data.accessToken) {
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
