import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import App from '../../components/app';
import 'reset-css/reset.css';
import '../../sass/common.scss';

ReactDom.render(
  <Provider store={store}><App/></Provider>,
  document.querySelector('.root')
);