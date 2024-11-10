<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
</script>

<template>
    <div id="app" class="h-100vh w-full dark:bg-#000 dark:text-#fff">
        <NuxtLayout />
    </div>
</template>

<style>
html.dark {
    background-color: #000;
    color: #fff;
}
</style>