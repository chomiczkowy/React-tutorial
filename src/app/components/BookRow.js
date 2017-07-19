var React=require('react');
require('../css/todoItem.css');

//Create TodoItem component
export default class BookRow extends React.Component{
  render() {
    return (
        <li>
          <div class="todo-item">
            <span class="item-name">{this.props.item.title}</span>
            <span class="item-delete" onClick={this.handleDelete.bind(this)} > x </span>
          </div>
        </li>
    );
  }

  //custom functions
  handleDelete() {
    const {item}= this.props;
    this.props.onDelete(item);
  }
}
