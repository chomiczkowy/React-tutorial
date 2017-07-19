import axios from "axios";

export function createBook(text) {
  return {
    type:"CREATE_BOOK",
    payload: text
  }
}

export function deleteBook(id) {
  return {
    type:"DELETE_BOOK",
    payload: id
  };
}

export function fetchBooks() {
  return function(dispatch){
    axios.get("http://rest.learncode.academy/api/test123/tweets")
    .then((response)=>{
      dispatch({type:"FETCH_BOOKS_FULFILLED", payload:[
        {
          id: 1,
          title:"Harry Potter"
        },
        {
          id: 2,
          title:"Pieśń lodu i ognia"
        },
        {
          id: 3,
          title:"Gra o tron"
        }
      ]})
    })
    .catch((err)=>{
      dispatch({type:"FETCH_BOOKS_REJECTED", payload: err});
    })
  }
}
