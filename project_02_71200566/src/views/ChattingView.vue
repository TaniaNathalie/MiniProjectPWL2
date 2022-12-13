<template>
    <div>
        <p>Kirim Pesan Ke:</p>
        <input type="text" v-model="username" placeholder="Username Teman..."/>
    </div>
    <br>
    <br>
    <div>
        <input type="text" v-model="pesan" placeholder="Ketik Pesan..."/>
        <button @click="add()">Kirim</button>
    </div>
    <div>
        <p v-for="userteman in listPesan" :key="userteman.pesan">{{userteman.pesan}}</p>
    </div>
</template>

<script>
import firebase from "../firebaseInit";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore(firebase);

export default {
    name: 'ChattingView',
    data(){
        return {
            listPesan: []
        }
    },
    methods: {
    async add(){
        addDoc(collection(db, "userteman"), {
        username: this.username,
        pesan: this.pesan
      });
        const querySnapshot = await getDocs(collection(db, "userteman"));
        querySnapshot.forEach((doc) => {
            this.listPesan.push(doc.data())
        });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>