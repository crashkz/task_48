<template>
    <div>
        <button class="btn" @click="$router.push('/')">Главная</button>
        <button class="btn" @click="$router.push('/posts')">Посты</button>
    </div>
</template>
  
<script>
export default{
    name: "navbar"
}
</script>

<style>

</style>