// @flow
// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList/ProductList';
import './../src/app.scss';

// $FlowIgnore
ReactDOM.render(<ProductList />, document.querySelector('#react-entry'));
