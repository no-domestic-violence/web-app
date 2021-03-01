import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, ProtectedRoute, LoginForm } from './components';
import { CreateArticle } from './screens';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <LoginForm />
            {/* <Home login={login} /> */}
          </Route>
          <ProtectedRoute
            path='/create'
            component={CreateArticle}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
