import axios from 'axios';

const state ={
    todos: []
};

const getters ={
    allTodos: (state) => state.todos
};

const actions ={
    async fetchTodos({ commit }) {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/todos?5');
        commit('setTodos', resp.data);
    },

    async addTodo({ commit }, title) {
        const resp = await axios.post('https://jsonplaceholder.typicode.com/todos',{
            title,completed:false
        });
        commit('newTodo', resp.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },

    async filterTodos({ commit }) {
        const limit = parseInt(event.target.textContent);
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', resp.data);
    }
};

const mutations={
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default{
    state,
    getters,
    actions,
    mutations
}