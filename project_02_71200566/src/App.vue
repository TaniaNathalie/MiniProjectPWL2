<template>
  <div>
    <input type="text" v-model="username" placeholder="Username anda..."/>
    <br>
    <button @click="add()">Simpan</button>
  </div>
  <nav>
    <router-link to="/chatting"></router-link>
  </nav>
  <router-view/>
</template>

<script>
import firebase from "./firebaseInit";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebase);

export default {
  name: 'App',
  methods: {
    add(){
      addDoc(collection(db, "user"), {
        username: this.username
      });
      this.$router.push('/chatting');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
