import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from './Pages/QuizPage';
import ChooseDifficulty from './Pages/ChooseDifficulty';
import ChooseCategory from './Pages/ChooseCategory';
import NotFound from './Pages/NotFound';

const Routing = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' index element={<App />}/>
      <Route path='/category' element={<ChooseCategory />} />
      <Route path='category/difficulty' element={<ChooseDifficulty />} />
      <Route path='category/difficulty/quiz' element={<QuizPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </Router>
  )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Routing />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
