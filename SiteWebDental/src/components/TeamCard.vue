<script>
export default {
  name: "EquipeCard",
  props: {
    image: {
      type: String,
      default: "src/assets/images/default.jpg",
    },
    nom: {
      type: String,
      required: true,
    },
    specialite: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:shadow-xl "
  >
    <img
      :src="image"
      :alt="nom"
      class="w-50 h-65 object-cover shadow-md mb-4"
    />
    <h2 class="text-lg font-bold text-gray-900 dark:text-white tracking-wide mb-1">
      {{ nom }}
    </h2>
    <p class="text-sm text-blue-600 dark:text-blue-300 italic">
      {{ specialite }}
    </p>
  </div>
</template>


