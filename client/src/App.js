import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import Scrape from "./components/Scrape";
import Scraped from "./components/Scraped";

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

      <div className='container mt-3'>
        <Switch>
          <Route exact path={["/", "/scrape"]} component={Scrape} />
          <Route exact path={"/scraped"} component={Scraped} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
