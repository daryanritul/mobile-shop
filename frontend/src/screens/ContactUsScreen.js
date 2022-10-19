import React from 'react';
import { useState } from 'react';
import { submitForm } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
const ContactUsScreen = () => {
  const [body, setBody] = useState('');
  const [subject, setSubject] = useState('');

  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(submitForm(subject, body));
  };
  return (
    <div className="authContainer">
      <div className="auth">
        <div className="auth-title">Contact Us Form</div>
        <div className="auth-inputBox">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
        </div>
        <div className="auth-inputBox">
          <textarea
            type="text"
            placeholder="Type Here"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <button onClick={() => submitHandler()}>Submit Form</button>
      </div>
    </div>
  );
};

export default ContactUsScreen;
