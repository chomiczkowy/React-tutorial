var React = require('react');
var Link = require('react-router').Link;

import { connect } from "react-redux"
import BookRow from "../components/BookRow";
import * as BookActions from "../actions/BookActions";

@connect((store)=>{
  return {
    books: store.books.books
  };
})
export default class BookSearch extends React.Component {
    constructor(){
      super();
    }

    componentWillMount(){
      this.props.dispatch(BookActions.fetchBooks());
    }

    render() {
      const { books } = this.props;
      const BookComponents = books.map((book)=>{
        return <BookRow key={book.id} item={book} onDelete={this.deleteBook.bind(this)} />
      })

        return(
          <form id="add-book" onSubmit={this.createBook.bind(this)}>
              <div>
                  <h2>Tu będzie możliwość wyszukiwania książek</h2>
                  <button type="submit">Dodaj!</button>
                    <button type="button" onClick={this.reloadBooks.bind(this)}>Załaduj!</button>
                  <input type="text" ref="newTitle"/>
                  <ul>
                    {BookComponents}
                  </ul>
              </div>
            </form>
        );
    }

    createBook(event) {
      event.preventDefault();
      this.props.dispatch(BookActions.createBook(this.refs.newTitle.value));
    }

    deleteBook(bookItem) {
      event.preventDefault();
      this.props.dispatch(BookActions.deleteBook(bookItem.id));
    }

    reloadBooks() {
        this.props.dispatch(BookActions.fetchBooks());
    }
}
