var React = require('react');
var Link = require('react-router').Link;

export default class BookRequest extends React.Component {
    render(){
        return(
            <div>
                <Link to={"/"}>Home</Link>
                <h2>Tu będzie możliwość zgłoszenia zapotrzebowania na książkę</h2>
            </div>
        );
    }
}
