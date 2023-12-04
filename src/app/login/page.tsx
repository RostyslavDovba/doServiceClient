'use client';
import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(process.env);

  const login = (e: any, email: any, password: any) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      Login page
      <form>
        <input
          type="text"
          className="border"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => login(e, email, password)}>Send</button>
      </form>
    </div>
  );
};

export default Login;
