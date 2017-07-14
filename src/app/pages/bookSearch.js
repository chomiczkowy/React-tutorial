var React = require('react');
var Link = require('react-router').Link;

export default class BookSearch extends React.Component {
    render() {
        return(
            <div>
                <Link to={"/"}>Home</Link>
                <h2>Tu będzie możliwość wyszukiwania książek</h2>
            </div>
        );
    }
}
