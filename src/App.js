import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';

function App() {
  const showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      });
    }
    return <Switch>{result}</Switch>
  };

  return (
    <Router>
      <div className="wrapper">
        <Menu />
        {showContentMenu(routes)}
      </div>
    </Router>
  );
}

export default App;
