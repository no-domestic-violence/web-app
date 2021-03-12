import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, ProtectedRoute } from './components';
import { Home, CreateArticle } from './screens';
import { Context as AuthContext } from './state/AuthContext';

function App() {
  const { authentication, state } = useContext(AuthContext);
  const { isAuthenticated } = state;

  useEffect(() => {
    authentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
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
