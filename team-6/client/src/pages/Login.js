import React, { useState } from 'react';
import '../index.css';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <div class="box">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={function (e) {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={function (e) {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
