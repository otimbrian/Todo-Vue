
import { createStore } from "vuex";


const store = createStore({
    state: {
        todos: [
            {
                id: 1,
                title: "Hello",
                done: false
            },
            {
                id: 2,
                title: "Hello Second",
                done: false
            }
        ]
    },
    getters: {
        getAllTodos: (state) => state.todos
    },

    actions: {
        addTodo({ commit }, todo) {
            commit("add_todo", todo)
        },

        deleteTodo({ commit }, todo) {
            commit("delete_todo", todo)
        },

        updateTodo({ commit }, todo) {
            commit("update_todo", todo)
        },

        markDone({ commit }, todo) {
            commit('mark_done', todo)
        }
    },

    mutations: {
        add_todo(state, todo) {
            state.todos.push(todo);
            console.log(state.todos)
        },

        delete_todo(state, todo) {
            state.todos = state.todos.filter(
                todos => todos.id != todo.id
            )
        },

        update_todo(state, todo) {

            const index = state.todos.findIndex(t => t.id == todo.id)

            if (index != -1) {
                state.todos[index] = todo
            }
            // const req = state.todos.find(todoq => todoq.id === todo.id)
            // const newreq = {
            //     ...req.title = todo.title
            // }

            // state.todos = state.todos.forEach(
            //     t => t.id === req.id ? newreq : t
            // )

        },

        mark_done(state, todo) {
            // state.ttodos = state.todos;
            // state.completed = state.completed == true ? false : true;
            let req = state.todos.find((t) => t.id === todo.id);
            req = {
                ...req, title: req.title.split('').map(char => char + '\u0336').join(''), done: !todo.done
            }

            state.todos = state.todos.forEach(t => {
                t.id !== todo.id ? todo : req
            })

            console.log(state.todos)
        }
    },
});

export default store