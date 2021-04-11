const TodoContext = React.createContext();
todoContext.displayName = "TodoContext";
const TodoProvider = TodoContext.Provider;
constTodoConsumer = TodoContext.Consumer;

export { TodoProvider, TodoContext };
