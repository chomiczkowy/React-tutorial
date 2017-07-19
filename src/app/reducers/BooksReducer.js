export default function reducer(state={
  books:[],
  fetching:false,
  fetched:false,
  error:null
}, action){

  switch(action.type){
    case "CREATE_BOOK": {
      return {
        ...state,
        books: [...state.books, {id: Date.now(), title:action.payload}]
      }
    }
    case "DELETE_BOOK": {
      var newState= {
        ...state
      };
      newState.books = newState.books.filter((val,index)=>{
        return val.id!==action.payload;
      });
      return newState;
    }
    case "FETCH_BOOKS": {
      return {...state, fetching: true};
    }
    case "FETCH_BOOKS_REJECTED": {
      return {...state, fetching: false};
    }
    case "FETCH_BOOKS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        books: action.payload
      };
    }
  }

  return state;
}
