<script setup lang="ts">

const backContainer = useTemplateRef("pageRightBack")

const onMouseDown = (event: MouseEvent) => {
  const { offsetX, offsetY } = event;
  const ele = (event.target as HTMLDialogElement)
  const moveX = ele.offsetWidth - offsetX
  // 计算中点坐标
  const middleX = (500 + offsetX) / 2
  const middleY = (0 + offsetY) / 2

  const angle = Math.atan(offsetY/moveX) * 180 / Math.PI * 2

  const width = offsetY / (Math.sin(angle / 180 * Math.PI))

  if(width >= 500){
    return
  }

  const angle2 = (180 - angle) / 2

  // tan(angle2) =  hy / width => tan(angle2) * width

  const height = Math.tan(angle2 / 180 * Math.PI) * width

  let pre = 0

  if (height > 700) {
    const outHeight = height - 700
    const width2 =  outHeight / Math.tan(angle2 / 180 * Math.PI)
    console.log(height, width, width2, angle2, outHeight)
    pre = width2 / width * 100
  }



  if(backContainer.value){
    backContainer.value.style.left = `${offsetX}px`;
    backContainer.value.style.top = `${offsetY}px`;
    backContainer.value.style.width = `${width}px`;
    backContainer.value.style.height = `${height > 700 ? 700 : height}px`;
    backContainer.value.style.transform = `rotate(-${angle}deg)`;
    if(height <= 700){
      backContainer.value.style.clipPath= `polygon(0 0, 100% 0, 0 100%)`
    }else {
      backContainer.value.style.clipPath = `polygon(0 0, 100% 0, ${pre}% 100%, 0 100%)`
    }
  }
}

</script>

<template>
  <div class="w-1000px h-700px border-1px grid cols-2 select-none">
    <div class="border-1px">1</div>
    <div class="page border-1px bg-green relative">
      <div @mousemove="onMouseDown" class="page-right absolute bg-#f0f0f0 w-full h-full">1</div>
      <div ref="pageRightBack" class="page-right-back absolute bg-#f0f0f0 border-1px">2</div>
    </div>
  </div>
</template>