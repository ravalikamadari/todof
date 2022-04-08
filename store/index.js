

// state
export const  state = () => ({
    token: null,
    mytasks: [],
    alltasks: [],
})

// getters
export const getters = {}

//action
export const actions = {
    async login({commit}, data) {
        await this.$axios.post('http://localhost:5197/api/users/login',{
                     username: data.username,
                     password: data.password,
     }).then(response => {
        commit('setToken', response.data);
        this.$router.push('/tasks');
     })
    },

    async getMyTodos({commit}) {
        await this.$axios.get('http://localhost:5197/api/todos/mytodos',{
            headers: {
                Authorization: 'Bearer ' + this.state.token,
            }
    }).then(res => {
        console.log(res.data);
        commit('setMyTasks', res.data);
    })

    },
    async getAllTodos({commit}) {
        await this.$axios.get('http://localhost:5197/api/todos',{
            headers: {
                Authorization: 'Bearer ' + this.state.token,
            }
    }).then(res => {
        commit('setAllTasks', res.data);
    })

    },
    async addTodo({commit}, data) {
        await this.$axios.post('http://localhost:5197/api/todos',{
            description: data},{
            headers: {
                Authorization: 'Bearer ' + this.state.token,
            }
            }).then(res => {
    })

    },
    async deleteTodo({commit}, data) {
        await this.$axios.delete('http://localhost:5197/api/todos/' + data,{
            headers: {
                Authorization: 'Bearer ' + this.state.token,
            }
    }).then(res => {
    })

    },
    async update({commit}, data) {

        await this.$axios.put('http://localhost:5197/api/todos/' + data,{ is_completed : true
        },{
            headers: {
                'Authorization': 'Bearer ' + this.state.token,
            }
    }).then(res => {
        console.log(res);
        console.log("called");

    })

    }
}


export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setMyTasks(state, tasks) {
        state.mytasks = tasks;
    },
    setAllTasks(state, tasks) {
        state.alltasks = tasks;
    },
}