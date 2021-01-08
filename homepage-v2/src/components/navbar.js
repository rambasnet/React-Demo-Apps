import React from "react";
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home';
import Teaching from './teaching';
import PageNoteFound from './page-not-found';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_text:['Home', 'Teaching', 'Research', 'Resources', 'Contact'],
            //nav_urls:['index', 'teaching.html', 'research.html', 'resources.html', 'contact.html'],
            current_nav:0 //current navigation id
        };
        this.listItems = this.state.nav_text.map( (value, index) =>
            <li className="nav-item">
            <Link className="nav-link" to={value.toLowerCase()}>{value}</Link>
            </li>
        );
    }
    
    render() {
        return (
          <Router>
            <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="index.html">&nbsp;</a>
                <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {this.listItems}
                    </ul>
                </div>
            </nav>
          
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/index">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/teaching">
                <Teaching />
              </Route>
              <Route exact path="/research">
                <h1>Research</h1>
                <h2>Demosntrate it...</h2>
              </Route>
              <Route exact path="/resources">
                <h1>Resources</h1>
                <h2>Can you try this? concert resources.html page from homepage-v1 to React component</h2>
              </Route>
              <Route exact path="/contact">
                <h1>Contact</h1>
                <h2>Can you try this? concert contact.html page from homepage-v1 to React component</h2>
              </Route>
              <Route path="*">
              <PageNoteFound />
              </Route>
            </Switch>
          </Router>
        );
    }
}

export default Navbar;

ReactDOM.render(
  <Navbar />,
  document.getElementById("navbar")
);
