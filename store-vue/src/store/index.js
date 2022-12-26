import Vuex, { Store } from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    names: [
      { id: 1, name: "Bolaji", age: 20, status: "single", average: "better" },
      { id: 2, name: "Hammed", age: 22, status: "date on", average: "stable" },
      {
        id: 3,
        name: "Adekunle",
        age: 23,
        status: "married",
        average: "wealthy",
      },
    ],
    count: 0,
  },
});
