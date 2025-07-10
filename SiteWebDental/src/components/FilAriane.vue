<script setup>
  defineProps({ step: Number })

  const steps = ['Dentiste', 'Horaire', 'Infos', 'Confirmation']
</script>

<template>
  <div class="flex justify-between items-center mb-6">
    <div
      v-for="(label, index) in steps"
      :key="index"
      class="flex-1 flex items-center"
    >
      <div
        class="w-8 h-8 flex items-center justify-center rounded-full border-2"
        :class="index + 1 <= step ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 text-gray-400'"
      >
        {{ index + 1 }}
      </div>
      <div v-if="index !== steps.length - 1" class="flex-1 h-1 mx-2"
        :class="index + 1 < step ? 'bg-blue-500' : 'bg-gray-300'"></div>
    </div>
  </div>
</template>


