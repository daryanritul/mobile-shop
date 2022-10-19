import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
const SignInScreen = ({ location, history }) => {
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const submitHandler = () => {
    dispatch(login(email, password));
  };
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <div className="authContainer">
      <div className="logo">
        <h1>E-MOBILES</h1>
        <h5>(Purchase from large varity of Smartphones)</h5>
      </div>
      <div className="auth">
        <div className="auth-title">Login</div>
        <div className="auth-inputBox">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="auth-inputBox">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button onClick={() => submitHandler()}>Sign Up</button>
        <p>
          Create new Account
          <span> Register</span>
        </p>
      </div>
    </div>
  );
};

export default SignInScreen;
