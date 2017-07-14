var React = require('react');
var Link = require('react-router').Link;

export default class MyPage extends React.Component {
    render(){
        return(
            <div>
                <Link to={"/"}>Home</Link>
                <h2>Tu będzie strona użytkownika - lista książek wypożyczonych, oczekiwanych itp.</h2>
            </div>
        );
    }
}
