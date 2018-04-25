import React from 'react';
import { render } from 'react-dom';

import 'whatwg-fetch';

import './styles/settings/fonts.less';
import './styles/generic/reset.less';
import './styles/generic/global.less';

import App from './components/App';

render(
  <App />,
  document.getElementById('root'),
);
