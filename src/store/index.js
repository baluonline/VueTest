import Vuex from "vuex";
import Vue from 'vue';
import todos from './modules';


// load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        todos
    }
})



