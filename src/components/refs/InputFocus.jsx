import React, { useRef, useEffect } from "react";

const LoginForm = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    // Optionally, you can remove the focus line entirely
    // usernameRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", usernameRef.current.value);
    console.log("Password:", passwordRef.current.value);
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
