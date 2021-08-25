import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/' className='navbar-brand'>
          Scrape
        </a>
        <div className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link to={"/scraped"} className='nav-link'>
              Scraped
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={"/scrape"} className='nav-link'>
              Scrape
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default App;
