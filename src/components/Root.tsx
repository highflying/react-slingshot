import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';

interface IOwnProps {
  store: any;
  history: any;
}

export default class Root extends React.Component<IOwnProps, {}> {
  public render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}
