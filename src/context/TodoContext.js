import {createContext, useContext} from "react"

export const TodoContext = createContext({
    // all Todos Structure
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


// custom Hooks
export const useTodo = () => {
    return useContext(TodoContext)
}


// Todo Provider
export const TodoProvider = TodoContext.Provider