import AddTodo from "./AddTodo";
import { TodoProvider } from "./Context";
import TodoList from "./TodoList";

export default function Parent() {
    return <TodoProvider>
        <AddTodo />
        <TodoList />
    </TodoProvider>
}