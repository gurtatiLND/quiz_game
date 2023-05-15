import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from './QuizPage';
import QuizSetUpPage from './QuizSetUpPage';
import ChooseDifficulty from './ChooseDifficulty';

const Routing = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' index element={<App />} />
      <Route path='/start' element={<QuizSetUpPage />} />
      <Route path='/start/difficulty' element={<ChooseDifficulty />} />
      <Route path='start/difficulty/quiz' element={<QuizPage />} />
    </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
