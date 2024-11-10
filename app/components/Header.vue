<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const themeToggle = useToggle(isDark)

</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-999 h-64px w-full flex items-center px-32px backdrop-blur-20px">
        <div class="font-900">Kehuay</div>
        <ul class="ml-auto flex gap-32px font-600">
            <li class="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r 
            bg-gradient-from-yellow bg-gradient-to-blue">
                <NuxtLink to="/">主页</NuxtLink>
            </li>
          <li class="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r
            bg-gradient-from-yellow bg-gradient-to-blue">
            <NuxtLink to="/posts/all">文章</NuxtLink>
          </li>
            <li class="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r 
            bg-gradient-from-yellow bg-gradient-to-blue">
                <NuxtLink to="/projects">项目</NuxtLink>
            </li>
            <li class="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r 
            bg-gradient-from-yellow bg-gradient-to-blue">
                <NuxtLink to="/cases">案例</NuxtLink>
            </li>
            <li class="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r 
            bg-gradient-from-yellow bg-gradient-to-blue">
                <NuxtLink to="/about">关于</NuxtLink>
            </li>
        </ul>
        <div class="i-lucide:github ml-32px cursor-pointer"></div>
        <div v-if="isDark" class="i-lucide:sun ml-32px cursor-pointer" @click="themeToggle()"></div>
        <div v-else class="i-lucide:moon ml-32px cursor-pointer" @click="themeToggle()"></div>
    </header>
</template>