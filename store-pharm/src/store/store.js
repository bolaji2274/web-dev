import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        names: [ 
            {name: 'Bolaji', age: 20, month: 'june'},
            {name: 'Adekunle', age: 22, month: 'feb'},
        ]
    }
})