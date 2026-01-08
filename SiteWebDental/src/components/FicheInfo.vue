<script setup>
defineProps({
  titre: String,
  description: String,
  imageSrc: String,
  points: Array,
  contenu: Array,
  lien: {
    type: String,
    default: "/rdv"
  }
});
</script>

<template>
  <section class="bg-gray-100 dark:bg-gray-900 min-h-screen px-4 md:px-10 py-16">
    <!-- TITRE -->
    <div data-aos="fade-down" class="text-center mb-16">
      <h1 class="text-4xl font-bold text-blueMarine dark:text-white">{{ titre }}</h1>
      <p class="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>

    <!-- CONTENU -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:ml-[-40px]">
      <!-- IMAGE -->
      <div data-aos="zoom-in-right" class="flex justify-start md:pl-4">
        <img :src="imageSrc" :alt="titre" class="w-full max-w-sm md:max-w-md rounded-xl shadow-lg" />
      </div>

      <!-- TEXTE -->
      <div data-aos="fade-left" class="space-y-6 md:pl-4">
        <div>
          <h2 class="text-2xl font-semibold text-blueMarine dark:text-white mb-2">
            Pourquoi choisir ce traitement ?
          </h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li v-for="(point, index) in points" :key="index">{{ point }}</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-blueMarine dark:text-white mb-2">
            Le traitement que nous proposons :
          </h2>
          <p
            v-for="(paragraphe, index) in contenu"
            :key="index"
            class="text-gray-700 dark:text-gray-300 mb-3"
          >
            {{ paragraphe }}
          </p>
        </div>

        <router-link
          :to="lien"
          class="inline-block bg-blueMarine hover:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300 mt-6"
        >
          Prendre rendez-vous
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.03);
}
</style>
