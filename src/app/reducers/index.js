import {combineReducers} from "redux"

import books from "./BooksReducer"
import user from "./UserReducer"

export default combineReducers({
  books,
  user
});
