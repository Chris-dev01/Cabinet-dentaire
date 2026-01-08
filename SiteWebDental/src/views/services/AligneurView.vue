<script setup>
  import { onMounted } from "vue";
  import AOS from "aos";
  import "aos/dist/aos.css";

  onMounted(() => {
    AOS.init({ once: true });
  });
</script>

<template>
  <section class="bg-gray-100 dark:bg-gray-900 min-h-screen px-4 md:px-10 py-16">
    <div data-aos="fade-down" class="text-center mb-16">
      <h1 class="text-4xl font-bold text-blueMarine dark:text-white">
        Traitement des caries
      </h1>
      <p class="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Préservez la santé de vos dents avec des soins efficaces et indolores adaptés à chaque patient.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 "> <!-- 💡 décalage à gauche -->
      <div data-aos="zoom-in-right" class="flex justify-start md:pl-4">
        <img
          src="@/assets/images/cavity.webp"
          alt="Illustration carie dentaire"
          class="w-100 h-100"
        />
      </div>

      <div data-aos="fade-left" class="md:ml-[-40px]">
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-blueMarine dark:text-white mb-2">
            Pourquoi traiter une carie rapidement ?
          </h2>
          <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Évite la propagation de l'infection.</li>
            <li>Préserve la dent naturelle.</li>
            <li>Évite les douleurs et les complications (abcès).</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-blueMarine mt-8 mb-4 dark:text-white mb-2">
            Le traitement que nous proposons :
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            Nous utilisons des techniques modernes et des matériaux de haute qualité pour retirer la carie et restaurer la dent avec une obturation esthétique, souvent invisible à l'œil nu.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            Le soin est rapide, indolore, et réalisé dans un environnement serein et rassurant.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            Un diagnostic précis est réalisé lors de chaque consultation afin de proposer la solution la plus adaptée à votre situation, dans le respect de votre confort et de votre bien-être.
          </p>
        </div>

        <router-link
          to="/rdv"
          class="inline-block justify-center bg-blueMarine hover:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300 mt-6"
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
