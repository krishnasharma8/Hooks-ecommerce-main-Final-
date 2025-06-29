// // // // Login.jsx
// // import React, { useState } from 'react';
// // import './Login.css'; // Import your CSS file for styling

// // const Login = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [contactNo, setContactNo] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLogin, setIsLogin] = useState(true);

// //   const handleLoginSignup = (e) => {
// //     e.preventDefault();
// //     if (isLogin) {
// //       // Implement login logic here
// //       console.log('Logging in...');
// //       // You can make an API call here to authenticate the user
// //       // For demonstration, let's assume successful login
// //       alert('Logged in successfully!');
// //     } else {
// //       // Implement signup logic here
// //       console.log('Signing up...');
// //       // You can make an API call here to register the user
// //       // For demonstration, let's assume successful signup
// //       alert('Signed up successfully!');
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <div className="login-card">
// //         <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
// //         <form onSubmit={handleLoginSignup}>
// //           {!isLogin && (
// //             <div className="form-group">
// //               <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
// //             </div>
// //           )}
// //           <div className="form-group">
// //             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //           </div>
// //           {!isLogin && (
// //             <div className="form-group">
// //               <input type="tel" placeholder="Contact Number" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />
// //             </div>
// //           )}
// //           <div className="form-group">
// //             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //           </div>
// //           <button type="submit" className="btn">{isLogin ? 'Login' : 'Sign Up'}</button>
// //         </form>
// //         <p>{isLogin ? "Don't have an account? " : "Already have an account? "}<span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign up' : 'Login'}</span></p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

//   const handleLoginSignup = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       // Login logic
//       const username = email.split('@')[0]; // Use email prefix as username
//       localStorage.setItem("userName", username);
//       localStorage.setItem("isLoggedIn", "true");
//       alert('Logged in successfully!');
//       navigate('/');
//       window.location.reload(); // Force refresh to update navbar
//     } else {
//       // Signup logic
//       localStorage.setItem("userName", name);
//       localStorage.setItem("isLoggedIn", "true");
//       alert('Signed up successfully!');
//       navigate('/');
//       window.location.reload(); // Force refresh to update navbar
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//         <form onSubmit={handleLoginSignup}>
//           {!isLogin && (
//             <div className="form-group">
//               <input 
//                 type="text" 
//                 placeholder="Name" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 required 
//               />
//             </div>
//           )}
//           <div className="form-group">
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </div>
//           {!isLogin && (
//             <div className="form-group">
//               <input 
//                 type="tel" 
//                 placeholder="Contact Number" 
//                 value={contactNo} 
//                 onChange={(e) => setContactNo(e.target.value)} 
//               />
//             </div>
//           )}
//           <div className="form-group">
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//           </div>
//           <button type="submit" className="btn">
//             {isLogin ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//         <p>
//           {isLogin ? "Don't have an account? " : "Already have an account? "}
//           <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
//             {isLogin ? 'Sign up' : 'Login'}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const userExists = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
  };

  const handleLoginSignup = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.email === email && user.password === password);
      
      if (user) {
        localStorage.setItem("userName", user.name);
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event('loginChange'));
        alert('Logged in successfully!');
        navigate('/');
      } else {
        setError('Invalid email or password. Please sign up first.');
      }
    } else {
      if (userExists(email)) {
        setError('Email already exists. Please login instead.');
        return;
      }

      const newUser = {
        name,
        email,
        contactNo,
        password
      };

      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      localStorage.setItem("userName", name);
      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event('loginChange'));
      alert('Signed up successfully!');
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLoginSignup}>
          {!isLogin && (
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
          )}
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input 
                type="tel" 
                placeholder="Contact Number" 
                value={contactNo} 
                onChange={(e) => setContactNo(e.target.value)} 
              />
            </div>
          )}
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              minLength="6"
            />
          </div>
          <button type="submit" className="btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="toggle-link" onClick={() => {
            setIsLogin(!isLogin);
            setError('');
          }}>
            {isLogin ? 'Sign up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;