var React=require('react');
var ReactDOM=require('react-dom');
require('./css/index.css');
import { Provider } from "react-redux"

import {Router, Route, browserHistory, Link} from 'react-router'
import Layout from './pages/layout'
import store from "./store"

var About = require('./pages/about').default;
var BookSearch = require('./pages/bookSearch').default;
var MyPage = require('./pages/myPage').default;
var BookRequest = require('./pages/bookRequest').default;

export default class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path={'/'} component={Layout}>
            <Route path={'/about'} component={About}></Route>
            <Route path={'/bookSearch'} component={BookSearch}></Route>
            <Route path={'/myPage'} component={MyPage}></Route>
            <Route path={'/bookRequest'} component={BookRequest}></Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

//umieszczamy komponent w divie
ReactDOM.render(<App />, document.getElementById('layout-container'));
