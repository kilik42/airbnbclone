
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
// import { Route, Switch } from "react-router";
 import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
          <Header />
      
        <Switch>
            <Router path = "/search">
            {/* search */}
            <SearchPage />
          </Router>

          <Route path ="/">
                <Home />
          </Route>
            
        
         </Switch>   

          <Footer  />
      </Router>


    </div>
  );
}

export default App;
