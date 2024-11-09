import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rental from './legal_component/Rental_code/rental_react';
import Sale from './legal_component/abortion/real-sale';
import Adoption from './legal_component/real-adoption/real-ado-react';
import Sales from './legal_component/sale_code/sale-react';
import Mains from './legal_component/main/main_react';
import Login from './legal_component/login/login_react';
import Signup from './legal_component/signup/signup_react';
import Bot from './legal_component/chat-bot/chat-react';
import DummyMains from './legal_component/main/dummy-main';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<DummyMains/>} />

        <Route path="/main_react" element={<Mains />} />
        <Route path="/rental_react" element={<Rental />} />
        <Route path="/sale-react" element={<Sales />} />
        <Route path="/real-ado-react" element={<Adoption />} />

        <Route path="/real-sale" element={<Sale />} />

        <Route path="/login_react" element={<Login />} />
        <Route path="/signup_react" element={<Signup />} />

        <Route path="/chat-react" element={<Bot />} />
      </Routes>
    </Router>
  );
}

export default App;
