import React from 'react';
import Header from './components/header/Header';
import { Home, CreateArticle } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/create'>
            <CreateArticle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
