import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import QuotesForm from './components/QuotesForm/QuotesForm';
import {useEffect, useState} from 'react';
import {addQuote} from '../types';
import Quotes from './components/Quotes/Quotes';
import axiosApi from './axiosApi';

function App() {
  const [addQuotes, setAddQuote] = useState<addQuote[]>([]);

  useEffect(() => {
    const fetchUrl = async () => {
      const responseUrl = await axiosApi.get('quotes.json?orderBy="category"&equalTo=');
      const result = responseUrl.data;
      setAddQuote((prev) => ({
        ...prev, result
      }));
    };

    void fetchUrl();
  }, []);

  return (
    <>
      <header className="d-flex justify-content-between p-3 rounded-3 mt-3">
        <h1>Quotes Central</h1>
        <nav className="pt-3">
          <ul className="navbar-nav ms-auto flex-row gap-2 flex-nowrap">
            <li className="nav-item">
              <NavLink to="/">Quotes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add-quote">Submit new quote</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Quotes />
        <Routes>
          <Route path="/" element={(
            <div></div>
          )}></Route>
          <Route path="/add-quote" element={<QuotesForm />} />
          <Route path="/quotes/star-wars" element={<div></div>}/>
          <Route path="/quotes/famous-people" element={<div></div>} />
          <Route path="/quotes/saying" element={<div></div>} />
          <Route path="/quotes/humour" element={<div></div>} />
          <Route path="/quotes/motivational" element={<div></div>} />
        </Routes>
      </main>
    </>
  )
}

export default App;
