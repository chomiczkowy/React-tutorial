var React=require('react');
import MainMenu from '../components/mainMenu'
import {connect} from "react-redux"

@connect((store)=>{
  return {

  };
})
export default class App extends React.Component{
  render() {
    return (
      <div>
        <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                    </button>
                </div>

              <MainMenu />
            </div>
        </nav>

        <header>
            <div class="container header">
                <div class="intro-text">
                    <div class="intro-heading">eBiblioteka</div>
                </div>
            </div>
        </header>

        <section id="services">
          <div id="content-container">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}
