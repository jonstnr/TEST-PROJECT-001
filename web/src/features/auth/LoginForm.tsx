import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake login for MVP
    if (username && password) {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <div>Welcome, {username}!</div>;
  }

  return (
    <form onSubmit={handleLogin} style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, maxWidth: 300 }}>
      <h4>Login</h4>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ display: 'block', marginBottom: 8, width: '100%' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: 8, width: '100%' }}
      />
      <button type="submit">Login</button>
    </form>
  );
}
