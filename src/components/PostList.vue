<template>
    <div>
        <h3>Список постов</h3>
        <post-item
            v-for="post in posts"
            :post="post"
            @remove="$event => $emit('remove', post)"
        />
    </div>
</template>
  
<script>
export default{
    name: "post-list",
    props: {
        posts:{
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped></style>