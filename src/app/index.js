var React=require('react');
var ReactDOM=require('react-dom');
require('./css/index.css');
import {Router, Route, browserHistory, Link} from 'react-router'
import TodoItem from './todoItem'

var AddItem=require('./addItem');
var About=require('./about');

var App=React.createClass({
  render:function(){
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    )
  }
})

var TodoComponent=React.createClass({
  getInitialState:function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap']
    }
  },
  render:function() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));

    return (
      <div id="todo-list">
        <Link to={'/about'}>About</Link>
        <p onClick={this.clicked}>The busiest people have the most leisure...</p>
        <ul>
          {todos}
        </ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  },

  //custom functions
  onDelete: function(item){
    var updatedTodos=this.state.todos.filter(function(val,index){
      return val !== item;
    });

    this.setState({
      todos:updatedTodos
    });
  },

  onAdd:function(item){
    var updatedTodos=this.state.todos;
    updatedTodos.push(item);

    this.setState({
      todos:updatedTodos
    });
  }
})

//umieszczamy komponent w divie
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
