
<script setup>
defineProps({
  imgSrc: String,
  alt: String,
  title: String,
  description: String,
  link: String, // facultatif
  delay: {
    type: Number,
    default: 0
  }
})
</script>


<template>
  <router-link :to="link" v-if="link">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
         data-aos="zoom-in"
         :data-aos-delay="delay">
      <img :src="imgSrc" :alt="alt" class="h-16 mx-auto mb-4" />
      <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">{{ description }}</p>
    </div>
  </router-link>

  <div v-else class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
       data-aos="zoom-in"
       :data-aos-delay="delay">
    <img :src="imgSrc" :alt="alt" class="h-16 mx-auto mb-4" />
    <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm">{{ description }}</p>
  </div>
</template>
