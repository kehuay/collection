<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <span class="mx-4px px-4px py-2px rounded-4px bg-#0000ff0f dark:bg-#0000ff20 text-#545454 dark:text-#a0a0a0">{{name}}</span>
</template>