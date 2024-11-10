<script setup lang="ts">
import RustLogo from '~/assets/rust-logo.svg'
import Tag from "~/components/Tag.vue";
</script>

<template>
  <div class="relative flex gap-128px">
    <div>
      <div class="text-20px">技能学习树</div>
      <div class="flex flex-col gap-16px mt-16px">
        <div class="w-300px h-200px p-8px rounded-8px shadow">
          <div class="flex items-center h-32px">
            <div class="text-18px">WEB</div>
          </div>
          <div >
            <div class="leading-2em">HTML/CSS/Javascript学习<Tag name="DOING" /></div>
          </div>
        </div>
        <div class="w-300px h-200px p-8px rounded-8px shadow">
          <div class="flex items-center  h-32px">
            <img :src="RustLogo" width="32"/>
            <div class="text-18px">Rust</div>
          </div>
          <div >
            <div class="leading-2em">Rust基础学习<Tag name="DONE" /></div>
            <div class="leading-2em">Trait学习<Tag name="DOING" /></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="text-20px">学习项目</div>
      <div class="flex flex-col gap-16px mt-16px">
        <div class="w-300px h-200px p-8px rounded-8px shadow">
          <div class="flex items-center h-32px">
            <div class="text-18px">Ndt2</div>
          </div>
          <div >
            <div>
              <Tag name="note" />
              <Tag name="diary" />
              <Tag name="tag" />
              <Tag name="todo" />
            </div>
            <div class="leading-2em">
              通过此项目来锤炼自己的技术。
            </div>
            <div class="leading-2em">
              Ndt2 是一个基于Blocksuite/Exceldraw的笔记应用，以打造个人数据平台为目的。
            </div>
          </div>
        </div>
        <div class="w-300px h-200px p-8px rounded-8px shadow">
          <div class="flex items-center  h-32px">
            <div class="text-18px">基于Rust爬取人民日报每日夜读</div>
          </div>
          <div >
            <div class="leading-2em">
              Rust实践项目<Tag name="DOING" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0 w-full h-full">
      <svg class="w-full h-full" viewBox="0 0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 300 120 h 128" stroke-width="8" stroke="blue" fill="transparent"/>
        <path d="M 300 340 h 128" stroke-width="8" stroke="blue" fill="transparent"/>
        <path d="M 300 330 q 64 0, 64 -100 t 64 -100" stroke-width="8" stroke="blue" fill="transparent"/>
      </svg>
    </div>
  </div>
</template>
