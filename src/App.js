import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import OtpPage from './pages/OtpPage'
import UpdatePage from './pages/UpdatePage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/signup" element={<SignUpPage />}></Route>
          <Route exact path="/otp" element={<OtpPage />}></Route>
          <Route exact path="/update" element={<UpdatePage />}></Route>
          <Route exact path="/signin" element={<SignInPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
