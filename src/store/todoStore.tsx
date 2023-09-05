import { store } from "redux";

const DEFAULT_VALUE = {
  todos: ["Todo1", "Todo2", "Todo3"],
};

const todoRedeucer = (state: DEFAULT_VALUE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state.todos, action.todo];
    case "REMOVE_TODO":
      return state.todos.filter((todo) => {
        return todo !== action.todo.id;
      });
    default:
      return state;
  }
};

const store = createStore(todoRedeucer);
