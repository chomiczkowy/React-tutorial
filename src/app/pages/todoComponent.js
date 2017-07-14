var React=require('react');
var AddItem = require('./addItem');
import {Router, Route, browserHistory, Link} from 'react-router'
import TodoItem from './todoItem'

export default class TodoComponent extends React.Component {
  constructor() {
     super();

     this.state = {
       todos: ['wash up', 'eat some cheese', 'take a nap']
     };
 }

  render () {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete.bind(this)}/>
      );
    }.bind(this));

    return (
      <div id="todo-list">
        <Link to={'/myPage'}>Moja strona</Link>
        <Link to={'/bookSearch'}>Wyszukiwarka książek</Link>
        <Link to={'/bookRequest'}>Zgłoś zapotrzebowanie</Link>
        <Link to={'/about'}>O aplikacji</Link>
        <p>The busiest people have the most leisure...</p>
        <ul>
          {todos}
        </ul>
        <AddItem onAdd={this.onAdd.bind(this)}/>
      </div>
    );
  }

  //custom functions
  onDelete(item) {
    var updatedTodos=this.state.todos.filter(function(val,index){
      return val !== item;
    });

    this.setState({
      todos:updatedTodos
    });
  }

  onAdd(item) {
    var updatedTodos=this.state.todos;
    updatedTodos.push(item);

    this.setState({
      todos:updatedTodos
    });
  }
}
