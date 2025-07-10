<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  avant: String,
  apres: String,
})

const container = ref(null)
const sliderValue = ref(50)
const isDragging = ref(false)

const afterImg = ref(null)
const divider = ref(null)

const updateClipPath = () => {
  if (afterImg.value && divider.value) {
    afterImg.value.style.clipPath = `inset(0 ${100 - sliderValue.value}% 0 0)`
    divider.value.style.left = `${sliderValue.value}%`
  }
}

const onMouseDown = (e) => {
  isDragging.value = true
  updatePosition(e.clientX)
}
const onMouseMove = (e) => {
  if (isDragging.value) {
    updatePosition(e.clientX)
  }
}
const onMouseUp = () => {
  isDragging.value = false
}

const updatePosition = (x) => {
  const rect = container.value.getBoundingClientRect()
  let percent = ((x - rect.left) / rect.width) * 100
  percent = Math.max(0, Math.min(100, percent))
  sliderValue.value = percent
  updateClipPath()
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  updateClipPath()
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
})
</script>

<template>
  <div
    ref="container"
    class="relative w-full max-w-xl mx-auto aspect-[4/3] rounded-xl shadow-lg overflow-hidden select-none cursor-ew-resize"
    @mousedown="onMouseDown"
  >
    <!-- Image Avant (en dessous) -->
    <img
      :src="avant"
      alt="Avant"
      class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
    />

    <!-- Image Après (au-dessus, masquée partiellement) -->
    <img
      :src="apres"
      alt="Après"
      ref="afterImg"
      class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none transition-none"
    />

    <!-- Ligne bleue verticale -->
    <div
      ref="divider"
      class="absolute top-0 h-full w-0.5 bg-black z-20 pointer-events-none"
      :style="{ transform: 'translateX(-50%)' }"
    ></div>

<!-- Curseur avec SVG -->
<div
  class="absolute top-1/2 z-30 w-10 h-10 bg-blueClair rounded-full border-4 border-white shadow cursor-pointer transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
  :style="{ left: sliderValue + '%' }"
  @mousedown.stop="onMouseDown"
>
  <!-- Double flèche horizontale -->
  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3m0 0l4-4m-4 4l4 4" />
  </svg>
</div>

  </div>
</template>
