<template>
    <div>
        <h1>Это страница поста с id {{ $route.params.id }}</h1>
        <post-item :post="$store.state.posts[$route.params.id -1]"/>
    </div>
</template>

<script>
export default{
    
}
</script>

<style>
p{
    margin: 10px;
    padding: 10px;
}
</style>