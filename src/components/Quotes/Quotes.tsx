import {Link} from 'react-router-dom';

const Quotes = () => {
  return (
    <div>
      <Link to="/">All</Link>
      <Link to="/quotes/star-wars">Star Wars</Link>
      <Link to="/quotes/famous-people">Famous people</Link>
      <Link to="/quotes/saying">Saying</Link>
      <Link to="/quotes/humour">Humour</Link>
      <Link to="/quotes/motivational">Motivational</Link>
    </div>
  );
};

export default Quotes;