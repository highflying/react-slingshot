/* eslint-disable import/default */

import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './components/Root';
import configureStore, { history } from './store/configureStore';

// tslint:disable-next-line:no-var-requires
require('./favicon.ico'); // Tell webpack to load favicon.ico

// Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into
// the page.
import './styles/styles.scss';

const store = configureStore({});

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
