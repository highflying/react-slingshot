import * as React from 'react';
import { Route } from 'react-router';
import { NavLink, Switch } from 'react-router-dom';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

interface IOwnProps {
  children: JSX.Element;
}

export default class App extends React.Component<{}, {}> {
  public render() {
    const activeStyle = { color: 'blue' };

    return (
      <div>
        <NavLink exact={true} to="/" activeStyle={activeStyle}>Home</NavLink>
        {' | '}
        <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
        {' | '}
        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        <br/>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
           <Route path="/fuel-savings" component={FuelSavingsPage as any} />
           <Route path="/about" component={AboutPage} />
           <Route component={NotFoundPage} />
         </Switch>
      </div>
    );
  }
}
