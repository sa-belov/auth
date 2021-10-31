import React from 'react';
import appRoutes from './app.router';
import { Route, Switch } from 'react-router-dom';

function App() {
  const renderRoutes = appRoutes.map((route) => (
    <Route key={route.id} path={route.path} component={route.component} exact={true} />
  ));

  return (
    <div className="App">
      <Switch>{renderRoutes}</Switch>
    </div>
  );
}

export default App;