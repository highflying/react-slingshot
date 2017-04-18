import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

interface IOwnProps {
  store: any;
  history: any;
}

export default class Root extends React.Component<IOwnProps, {}> {
  public render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
