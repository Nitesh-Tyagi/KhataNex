import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './LoginPage';
import LoggedInPage from './LoggedInPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage onLogin={handleLogin} />}/>
        <Route path="/dashboard" element={<LoggedInPage user={user} />}/>
      </Routes>
    </Router>
  );
}

export default App;
