<script lang="ts" setup>

import Background from "~/components/home/Background.vue";
import HorizontalScroll from "~/components/home/HorizontalScroll.vue";
import PostList from "~/components/home/PostList.vue";
import Skill from "~/components/home/Skill.vue";

definePageMeta({
  layout: 'main'
})
</script>

<template>
  <div class="h-100% relative overflow-hidden">
    <Background/>
    <div class="absolute top-0 right-0 bottom-0 left-0 pt-64px backdrop-blur-30px">
      <HorizontalScroll />
      <PostList class="mt-32px" />
    </div>

  </div>
  <div class="h-100% relative overflow-hidden">
    <Background />
    <div class="h-full backdrop-blur-30px flex items-center justify-center p-64px">
      <Skill />
    </div>
  </div>
</template>

<style scoped>
.page {
  transform-origin: left;
}

.page-right-back {
  transform-origin: top left;
  width: 100px;
  height: 100%;
  background-color: blue;
}

@keyframes turn {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}
</style>