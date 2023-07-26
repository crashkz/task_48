<template>
    <div class="post">
        <div><strong>id:</strong> {{post.id}}</div>
        <div><strong>Тема:</strong> {{post.title}}</div>
        <div><strong>Описание:</strong> {{post.body}}</div>
        <button @click="$event => $router.push(`/posts/${post.id}`)">Открыть</button>
    </div>
</template>
  
<script>
export default{
    name: "post-item",
    props:{
        post:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.post{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 2px solid teal; 
    margin-bottom: 20px; 
    align-items: flex-start;
}
.post button {
    margin-left: auto;
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
}
</style>