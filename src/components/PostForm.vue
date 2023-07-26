<template>
    <div class="post-add">
        <h3>Добавить пост</h3>
        <form @submit.prevent>
            <input type="text" v-model="post.title" placeholder="Введите название"/>
            <input type="text" v-model="post.body" placeholder="Введите описание"/>
            <center><button @click="create">Добавить</button></center>
        </form>
    </div>
</template>
  
<script>
export default{
    name: "post-form",
    data(){
        return{
            post:{
                title: "",
                body: ""
            }
        }
    },
    methods:{
        create(){
            this.$emit("create", this.post)
            this.post = {
                title: "",
                body: ""
            }
        }
    }
}
</script>

<style>
.post-add{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 2px solid teal; 
    margin-bottom: 20px; 
    align-items: flex-start;
    width: 190px;
}
.post-add button {
    width: 50%;
    margin: 10px;
    padding: 10px;
    border: 2px solid rgb(147, 186, 240);
    border-radius: 12px;  
}
input{
    margin: 10px;
    padding: 10px;
    border: 2px solid rgb(147, 186, 240);
    border-radius: 8px;
}
h3{
    margin: 10px;
    padding: 10px;
}
</style>