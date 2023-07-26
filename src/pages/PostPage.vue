<template>
    <div> Колличество лайков {{ $store.state.likes }}</div>
    <div> Двойные лайки {{ $store.getters.doubleLikes }}</div>

    <button @click="$store.commit('incLikes')">Лайк</button>
    <button @click="$store.commit('decLikes')">Дизлайк</button>
  
    <button class="btn" v-if="showButton" @click="showButton = false">Добавить пост</button>
    <p v-else><post-form @create="createPost"/></p>
    
    <post-list 
    :posts="posts"
    @remove="deletePost"
    />
  </template>
  
  <script>
  import { mapState, mapActions, mapMutations} from 'vuex'
  export default{
    mounted(){
        this.fetchPosts()
    },
    methods:{
        ...mapActions({
            fetchPosts: "fetchPosts",
        }),
        ...mapMutations({
            createPost: "createPost"
        }),
        createPosts(post){
        this.createPost(post)
        }
    },
    computed:{
        ...mapState({
            posts: state => state.posts
        })
    },
    handler(){
        this.createPost()
    }
  }
  </script>
  
  <style>
  .btn {
      width: 120px;
      margin: 10px;
      padding: 10px;
      border: 2px solid rgb(147, 186, 240);
      border-radius: 12px;  
  }
  </style>
  


  <!-- <template>
    <div> Колличество лайков {{ $store.state.likes }}</div>
    <div> Двойные лайки {{ $store.getters.doubleLikes }}</div>

    <button @click="$store.commit('incLikes')">Лайк</button>
    <button @click="$store.commit('decLikes')">Дизлайк</button>
  
    <button class="btn" v-if="showButton" @click="showButton = false">Добавить пост</button>
    <p v-else><post-form @create="createPost"/></p>
    
    <post-list 
    :posts="posts"
    @remove="deletePost"
    />
  </template>
  
  <script>
  import axios from "axios"
  
  export default{
    data(){
      return{
        posts: [],
        id: 0,
        showButton: true
      }
    },
    methods:{
      updateMessage(eventData){
        this.message = eventData
      },
      async fetchPosts(){
          const responce = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
          this.posts = responce.data
          this.id = this.posts.length
      },
      deletePost(post){
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      createPost(post){
        this.id++
        post.id = this.id
        this.posts.push(post)
      }
    },
    mounted(){
        this.fetchPosts()
      }
  }
  </script>
  
  <style>
  .btn {
      width: 120px;
      margin: 10px;
      padding: 10px;
      border: 2px solid rgb(147, 186, 240);
      border-radius: 12px;  
  }
  </style>
   -->