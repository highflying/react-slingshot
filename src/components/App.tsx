import * as React from 'react';
// import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

interface IOwnProps {
  children: JSX.Element;
}

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
