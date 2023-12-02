import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import {addQuote} from '../../../types';
import axiosApi from '../../axiosApi';

const quoteId = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Famous people', id: 'famous-people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humour', id: 'humour'},
  {title: 'Motivational', id: 'motivational'},
]

const QuotesForm = () => {
  const [quote, setQuote] = useState<addQuote>({
    category: '',
    author: '',
    text: '',
  });

  const navigate = useNavigate();

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const quoteData = {
      quote,
    };

    try {
      await axiosApi.post('quotes.json', quoteData);
    } catch (err) {
      alert('Warning error ' + err);
    }

    navigate('/');
  };

  const changeQuote = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = event.target;

    setQuote((prevState) => ({...prevState, [name]: value,}));
  };

  return (
    <form onSubmit={formSubmit} className="ms-auto me-auto w-75 d-flex flex-column">
      <select id="category" name="category"
              value={quote.category}
              onChange={changeQuote}
              required
      >
        <option value=""></option>
        {quoteId.map((title) => (
          <option key={Math.random()}>{title.id}</option>
        ))}
      </select>
      <input type="text" name="author" id="author"
             className="mb-2" required
             value={quote.author}
             onChange={changeQuote}
      />
      <textarea name="text" id="text" className="mb-2"
                required
                value={quote.text}
                onChange={changeQuote}
      />
      <button type="submit" className="btn btn-light">Save</button>
    </form>
);
};

export default QuotesForm;