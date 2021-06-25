import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home'
import Dashboards from './components/Dashboards/Dashboards'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboards/:id" component={Dashboards} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
