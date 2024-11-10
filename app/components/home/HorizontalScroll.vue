<script setup lang="ts">

</script>

<template>
  <div class="cursor-grab select-none relative h-200px w-full flex">
    <div class="horizontal-container h-[calc(100vw-16px)] w-200px
                    origin-tl mt-200px -rotate-90deg overflow-auto">
      <div class="h-200px flex rotate-90deg">
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=1"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=2"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=3"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=4"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=5"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=6"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=7"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=8"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=9"/>
        <img class="drag-none" width="200" height="200" src="https://picsum.photos/200/200?r=0"/>
      </div>
    </div>
    <div
        class="absolute bottom-16px left-50% -translate-x-50% w-40px h-40px rounded-1/2 flex items-center justify-center backdrop-blur-10px">
      <div class="i-lucide:mouse text-#ffffffa0 text-32px"></div>
    </div>
  </div>
</template>

<style scoped>

.drag-none {
  -webkit-user-drag: none;
}

.horizontal-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.horizontal-container::-webkit-scrollbar-thumb {
  height: 0;
  width: 0;
}

.horizontal-container::-webkit-scrollbar-track {
  height: 0;
  width: 0;
}
</style>
<script setup lang="ts">
</script>