import { createStore } from "vuex"
import axios from "axios"

export default createStore({
    state:{
        posts: [],
        likes: 0,
        id: 0
    },
    getters:{
        doubleLikes(state){
            return state.likes * 2
        }

    },
    mutations:{
        incLikes(state){
            state.likes += 1
        },
        decLikes(state){
            state.likes -= 1
        },
        setPosts(state, newPosts){
            state.posts = newPosts
            state.id = state.posts.length
        },
        deletePost(state, post){
            state.posts = state.posts.filter(p => p.id !== post.id)
          },
        createPost(state, post){
            state.posts.push({
                title: post.title,
                body: post.body,
                id: ++state.id
            })
        }
    },
    actions:{
        async fetchPosts({commit}){
            const responce = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            commit("setPosts", responce.data)
        }
    }
})