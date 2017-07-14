var React=require('react');
import {Router, Route, browserHistory, Link} from 'react-router'

export default class MainMenu extends React.Component{
  render(){
    return (
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
              <li class="hidden">
                  <a href="#page-top"></a>
              </li>
              <li>
                <Link class="page-scroll" to={'/myPage'}>Moja strona</Link>
              </li>
              <li>
                <Link class="page-scroll"  to={'/bookSearch'}>Wyszukiwarka książek</Link>
              </li>
              <li>
                 <Link class="page-scroll" to={'/bookRequest'}>Zgłoś zapotrzebowanie</Link>
              </li>
              <li>
                 <Link class="page-scroll"  to={'/about'}>O aplikacji</Link>
              </li>
          </ul>
      </div>
    );
  }
}
