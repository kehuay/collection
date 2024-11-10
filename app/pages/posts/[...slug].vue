<script lang="ts" setup>

definePageMeta({
  layout: 'main'
})

</script>

<template>
  <div class="w-640px mx-auto markdown-content">
    <ContentDoc />
  </div>
</template>

<style>
.markdown-content h1 {
  font-size: 36px;
  margin-bottom: 16px;
}

.markdown-content h2 {
  font-size: 32px;
  margin-bottom: 16px;
}

.markdown-content h3 {
  font-size: 28px;
  margin-bottom: 16px;
}

.markdown-content h4 {
  font-size: 24px;
  margin-bottom: 16px;
}

.markdown-content h5 {
  font-size: 20px;
  margin-bottom: 16px;
}

.markdown-content h6 {
  font-size: 16px;
  margin-bottom: 16px;
}

.markdown-content blockquote {
  padding: 8px 0 8px 8px;
  border-left: 2px solid #a6bae1;
  background-color: #f5f7f9;
  margin: 16px 0;
}

.markdown-content pre {
  margin: 16px 0;
  padding: 16px 32px;
  background-color: #f5f7f9;
  border-radius: 8px;
}
.markdown-content code .line{
  position: relative;
}
.markdown-content code .line::before {
  content: attr(line);
  width: 1em;
  height: 100%;
  position: absolute;
  top: 0;
  left: -16px;
  color: blue;
}

.markdown-content code > .highlight {
  background-color: #ebf0fa;
}
</style>