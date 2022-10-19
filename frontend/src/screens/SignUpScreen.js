import React, { useState, useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const SignUpScreen = ({ location, history }) => {
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userRegister);

  const { error, loading, userInfo } = userRegister;

  const onSignUpHandler = () => {
    if (!email || !password || !cnfPassword) {
      setErrors('Invalid Input! Fill all Fields');
      return;
    }
    if (password.length < 6) {
      setErrors('Password too short.');
      return;
    }
    if (password !== cnfPassword) {
      setErrors('Confirm password does not match');
      return;
    }
    console.log({
      email,
      password,
    });
    dispatch(register(name, email, password));
  };
  const clearError = () => {
    setErrors(false);
  };

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
        <div className="auth-title">Create New Account</div>
        <div className="auth-inputBox">
          <label>Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onFocus={() => clearError()}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="auth-inputBox">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onFocus={() => clearError()}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="auth-inputBox">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onFocus={() => clearError()}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="auth-inputBox">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Password"
            onFocus={() => clearError()}
            onChange={e => setCnfPassword(e.target.value)}
            value={cnfPassword}
          />
        </div>
        {errors && <p className="auth-error">{errors}</p>}

        <button onClick={() => onSignUpHandler()}>Sign Up</button>
        <p>
          Already have an Account
          <span> Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;
