// Login.jsx
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSignup = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Implement login logic here
      console.log('Logging in...');
      // You can make an API call here to authenticate the user
      // For demonstration, let's assume successful login
      alert('Logged in successfully!');
    } else {
      // Implement signup logic here
      console.log('Signing up...');
      // You can make an API call here to register the user
      // For demonstration, let's assume successful signup
      alert('Signed up successfully!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleLoginSignup}>
          {!isLogin && (
            <div className="form-group">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          )}
          <div className="form-group">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input type="tel" placeholder="Contact Number" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />
            </div>
          )}
          <div className="form-group">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>{isLogin ? "Don't have an account? " : "Already have an account? "}<span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign up' : 'Login'}</span></p>
      </div>
    </div>
  );
};

export default Login;
