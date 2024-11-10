<script setup lang="ts">
const scrollContainer = useTemplateRef("cards-container")

const isStartupMouse = ref(false)
const mouseStartMovePosition = ref({
  x: 0,
  y: 0
})
const mouseEndMovePosition = ref({
  x: 0,
  y: 0
})
const mouseHorizontalMoveDistance = ref(0)

const onMouseDown = (event: MouseEvent) => {
  if (!isStartupMouse.value) {
    isStartupMouse.value = true
    mouseHorizontalMoveDistance.value = 0
    mouseStartMovePosition.value = {
      x: event.clientX,
      y: event.clientY
    }
  }
}

const onMouseMove = (event: MouseEvent) => {
  // if(isStartupMouse.value) {
  //   console.log(event)
  // }
}

const onMouseUp = (event: MouseEvent) => {
  if (isStartupMouse.value) {
    isStartupMouse.value = false
    mouseHorizontalMoveDistance.value = 0
    mouseEndMovePosition.value = {
      x: event.clientX,
      y: event.clientY
    }

    // 计算移动距离
    mouseHorizontalMoveDistance.value =
        mouseEndMovePosition.value.x - mouseStartMovePosition.value.x

    if (scrollContainer.value) {

      let animationId: number | null = null

      const scrollableWidth = scrollContainer.value.scrollWidth - scrollContainer.value.offsetWidth

      const animationFrame = () => {

        let moveDiff = mouseHorizontalMoveDistance.value > 0 ? -10 : 10
        if (Math.abs(mouseHorizontalMoveDistance.value) <= 10) {
          moveDiff = -mouseHorizontalMoveDistance.value
        }
        scrollContainer.value!.scrollLeft += moveDiff
        mouseHorizontalMoveDistance.value += moveDiff

        if (
            scrollContainer.value!.scrollLeft <= 0
            || scrollContainer.value!.scrollLeft >= scrollableWidth
            || mouseHorizontalMoveDistance.value === 0
        ) {
          animationId !== null && cancelAnimationFrame(animationId)
        } else {
          animationId = requestAnimationFrame(animationFrame)
        }
        console.log("Run")
      }
      animationId = requestAnimationFrame(animationFrame)
    }
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    const scrollableWidth = scrollContainer.value.scrollWidth - scrollContainer.value.offsetWidth
    scrollContainer.value?.scrollTo({
      left: scrollableWidth / 2,
      behavior: "smooth"
    })
  }

})
</script>

<template>
  <div
      ref="cards-container"
      class="w-full card cursor-grab h-400px overflow-x-scroll flex p-32px"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
  >
    <div
        class="overflow-y-auto card w-250px select-none shrink-0 transition-all duration-500 origin-c hover:(rotate-0 scale-110 z-1) border-1px dark:border-#4a4a4a shadow-[0_0_16px_8px_#f0f0f0] dark:shadow-[0_0_16px_8px_#030303] p-8px rounded-8px">
      <div>@人民日报</div>
      <div class="leading-2rem text-1.25rem">真正的高情商，底色都是善良</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0 mb-16px">善意如暖阳，照亮别人，也温暖自己</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        1、善良，是善于尊重和倾听
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        2、善良，是眼里有他人
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        3、善良，是懂得换位思考
      </div>
    </div>
    <div
        class="overflow-y-auto card ml-32px select-none shrink-0 transition-all duration-500 origin-c hover:(rotate-0 scale-110 z-1) rotate-z-10deg w-250px border-1px dark:border-#4a4a4a shadow-[0_0_16px_8px_#f0f0f0] dark:shadow-[0_0_16px_8px_#030303] p-8px rounded-8px">
      <div>@人民日报</div>
      <div class="leading-2rem text-1.25rem">向前一步，结果或许不同</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0 mb-16px">向前一步，结果或许不同</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        1、有一种遗憾，是“我本可以”
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        2、试一试
        你才知道自己有多大能量
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        3、向前一步

        也许结果就会不同
      </div>
    </div>
    <div
        class="overflow-y-auto card ml-32px select-none shrink-0 transition-all duration-500 origin-c hover:(rotate-0 scale-110 z-1) -rotate-z-5deg w-250px border-1px dark:border-#4a4a4a shadow-[0_0_16px_8px_#f0f0f0] dark:shadow-[0_0_16px_8px_#030303] p-8px rounded-8px">
      <div>@人民日报</div>
      <div class="leading-2rem text-1.25rem">真正的成熟，是懂得这6件事</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0 mb-16px">成熟，是一个追求更好的过程</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        1、遇事不慌不忙
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        2、努力向上生长
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        3、学会接纳遗憾
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        4、能与自己和解
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        5、能够体谅他人
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        6、学会照顾自己
      </div>
    </div>
    <div
        class="overflow-y-auto card ml-32px select-none shrink-0 transition-all duration-500 origin-c hover:(rotate-0 scale-110 z-1) -rotate-z-10deg w-250px border-1px dark:border-#4a4a4a shadow-[0_0_16px_8px_#f0f0f0] dark:shadow-[0_0_16px_8px_#030303] p-8px rounded-8px">
      <div>@人民日报</div>
      <div class="leading-2rem text-1.25rem">通往优秀的路上，离不开这4句话</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0 mb-16px">深耕自己，专注的人自会发光</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        1、目标明确，奋力前行
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        2、勇于探索，主动尝试
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        3、深耕自己，精益求精
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        4、善于反思，及时复盘
      </div>
    </div>
    <div
        class="overflow-y-auto card ml-32px select-none shrink-0 transition-all duration-500 origin-c hover:(rotate-0 scale-110 z-1) rotate-z-0deg w-250px border-1px dark:border-#4a4a4a shadow-[0_0_16px_8px_#f0f0f0] dark:shadow-[0_0_16px_8px_#030303] p-8px rounded-8px">
      <div>@人民日报</div>
      <div class="leading-2rem text-1.25rem">懂得欣赏，是一种了不起的才华</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0 mb-16px">欣赏别人，也是成就自己</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        1、能够欣赏自己，是一种智慧
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        2、懂得欣赏别人，是一种能力
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        3、多一份欣赏，就多一份美好
      </div>
    </div>
    <div
        class="overflow-y-auto card ml-32px select-none shrink-0 transition-all duration-500 origin-c hover:(rotate-0 scale-110 z-1) rotate-z-0deg w-250px border-1px dark:border-#4a4a4a shadow-[0_0_16px_8px_#f0f0f0] dark:shadow-[0_0_16px_8px_#030303] p-8px rounded-8px">
      <div>@人民日报</div>
      <div class="leading-2rem text-1.25rem">迅速恢复能量的10件小事，推荐你马上试试</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0 mb-16px">享受当下，就是人生最好的状态</div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        1、赶一次早市
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        2、认真为自己做一顿饭
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        3、坐公交车看风景
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        4、约朋友吃顿火锅
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        5、去公园待20分钟
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        6、运动15分钟
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        7、给自己买一束花
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        8、大声唱一首歌
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        9、把烦恼写在纸上
      </div>
      <div class="text-#3a3a3a dark:text-#e0e0e0">
        10、睡一个好觉
      </div>
    </div>
  </div>
</template>

<style scoped>
.card::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.card::-webkit-scrollbar-thumb {
  width: 0;
  height: 0;
}

.card::-webkit-scrollbar-track {
  width: 0;
  height: 0;
}
</style>