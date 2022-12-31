<template>
  <div>
    <div class="container">
        <div class="row">
            <div class="colum">
                <h1>My name is {{name}}</h1>
                <button @click="changeName">Change Name</button>
            </div>
            <div class="colum">
                <UserDetail :myName="name" @resetName="Reset"/>
            </div>
        </div>
    </div>
    <UserDetail/>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import UserEdit from "./UserEdit.vue";
import UserDetail from './UserDetail.vue'
export default {
  data() {
    return {
      name: "Bolaji",
    };
  },
  components: {
    HelloWorld,
    UserEdit,
    UserDetail
  },
  methods: {
    changeName() {
      return (this.name = this.name === "Bolaji" ? "Hammed" : "Bolaji");
    },
    Reset(){
        this.myName = 'Adekunle';
    }
  },
};
</script>

<style scoped>
.row{
    display: flex;
    flex-wrap: nowrap;
    margin-top: 4%;
}
.colum{
    width: 50%;
    border: 2px solid springgreen;
    text-align: center;
}

</style>
