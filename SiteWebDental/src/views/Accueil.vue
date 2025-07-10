<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BeforeAfter from '@/components/BeforeAfter.vue'
import avantImg from '@/assets/images/dents.jpg'
import apresImg from '@/assets/images/dents2.jpg'

onMounted(() => {
  AOS.init({ once: true, duration: 800 })
})
</script>

<template>
<div class="relative w-full h-[450px]">
  <img
    src="@/assets/images/banniere.png"
    alt="Bannière principale du cabinet dentaire"
    class="w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-gray bg-opacity-40 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <div class="absolute inset-0 bg-blueFonce/15 backdrop-blur-sm z-10"></div>

    <div
      class="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center"
    >
      <h1 class="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
        Confiance et soin pour votre sourire
      </h1>
      <p class="text-lg md:text-2xl max-w-2xl drop-shadow-sm">
        Prenez rendez-vous dès aujourd'hui et découvrez des soins dentaires
      </p>

        <router-link
          to="/rdv"
          class="mt-6 bg-blueFonce hover:bg-blueClair text-white font-semibold text-lg py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          Prenez rendez-vous
        </router-link>
    </div>


  </div>
</div>


  <div class="overflow-hidden bg-blue py-4 group relative">
    <div class="scroll-track group-hover:paused">
      <div class="scroll-content">
        <template v-for="i in 2" :key="i">
          <router-link to="/appareil-dentaire">
            <img src="@/assets/images/braces.png" alt="Appareil dentaire" class="h-30 inline-block md:h-24 mx-4 sm:mx-6 md:mx-10 hover:scale-110 transition-transform duration-300" />
          </router-link>
          <router-link to="/detartrage">
            <img src="@/assets/images/cleaning.png" alt="Détartrage" class="h-30 inline-block md:h-24 mx-4 sm:mx-6 md:mx-10 hover:scale-110 transition-transform duration-300" />
          </router-link>
          <router-link to="/invisalign">
            <img src="@/assets/images/invisaligne.png" alt="Invisalign" class="h-30 inline-block md:h-24 mx-4 sm:mx-6 md:mx-10 hover:scale-110 transition-transform duration-300" />
          </router-link>
          <router-link to="/prothese">
            <img src="@/assets/images/protheses.png" alt="Prothèse dentaire" class="h-30 inline-block md:h-24 mx-4 sm:mx-6 md:mx-10 hover:scale-110 transition-transform duration-300" />
          </router-link>

          <router-link to="/facettes">
            <img src="@/assets/images/facettes.png" alt="facettes" class="h-30 inline-block md:h-24 mx-4 sm:mx-6 md:mx-10 hover:scale-110 transition-transform duration-300" />
          </router-link>

          <router-link to="/carie">
            <img src="@/assets/images/carie.png" alt="carie" class="h-30 inline-block md:h-24 mx-4 sm:mx-6 md:mx-10 hover:scale-110 transition-transform duration-300" />
          </router-link>

          <router-link to="/esthetique">
            <img src="@/assets/images/esthetique.png" alt="esthetique" class="h-30 inline-block md:h-24 mx-4 sm:mx-6 md:mx-10 hover:scale-110 transition-transform duration-300" />
          </router-link>

        </template>
      </div>
    </div>
  </div>


<section class="bg-blue-50 dark:bg-gray-900 pt-8 pb-12 px-6 md:px-20 transition-colors duration-500">
  <div class="max-w-7xl mx-auto">
  <h2 class="text-3xl font-bold text-center mb-12 text-blueMarine dark:text-white" data-aos="fade-up">
      Notre équipe
    </h2>

    <div
      class="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="w-full md:w-1/2 text-center md:text-left">
        <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
          Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
        </p>

        <div class="flex justify-center ">
          <router-link
            to="/equipe"
            class="inline-block bg-blueFonce hover:bg-blueClair text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Découvrez l'équipe
          </router-link>
        </div>
      </div>

      <div
        class="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src="@/assets/images/equipe.jpg"
          alt="Équipe du cabinet dentaire"
          class="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  </div>
</section>

<section class="bg-blueFonce py-3 px-4 overflow-x-auto">
  <div
    class="flex items-center gap-6 md:gap-10 justify-start md:justify-center w-max md:w-auto"
  >
    <div class="inline-flex items-center space-x-2 flex-shrink-0">
      <img
        src="@/assets/images/dent.png"
        alt="Dentisterie Générale"
        class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
      <span class="text-white text-xs sm:text-sm md:text-base font-semibold">Dentisterie Générale</span>
    </div>

    <div class="inline-flex items-center space-x-2 flex-shrink-0">
      <img
        src="@/assets/images/dent.png"
        alt="Orthodontie"
        class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
      <span class="text-white text-xs sm:text-sm md:text-base font-semibold">Orthodontie</span>
    </div>

    <div class="inline-flex items-center space-x-2 flex-shrink-0">
      <img
        src="@/assets/images/dent.png"
        alt="Pédodontie"
        class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
      <span class="text-white text-xs sm:text-sm md:text-base font-semibold">Pédodontie</span>
    </div>

    <div class="inline-flex items-center space-x-2 flex-shrink-0">
      <img
        src="@/assets/images/dent.png"
        alt="Parodontie"
        class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
      <span class="text-white text-xs sm:text-sm md:text-base font-semibold">Parodontie</span>
    </div>

    <div class="inline-flex items-center space-x-2 flex-shrink-0">
      <img
        src="@/assets/images/dent.png"
        alt="Blanchiment dentaire"
        class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
      <span class="text-white text-xs sm:text-sm md:text-base font-semibold">Blanchiment</span>
    </div>

    <div class="inline-flex items-center space-x-2 flex-shrink-0">
      <img
        src="@/assets/images/dent.png"
        alt="Implantologie"
        class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      />
      <span class="text-white text-xs sm:text-sm md:text-base font-semibold">Implantologie</span>
    </div>

  </div>
</section>






  <section class="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-20 transition-colors duration-500">
  <h2 class="text-3xl font-bold text-center mb-12 text-blueMarine dark:text-white" data-aos="fade-up">Nos services</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
  <router-link to="/appareil-dentaire">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="100">
      <img src="@/assets/images/braces.png" alt="Icone appareil dentaire" class="h-16 mx-auto mb-4" />
      <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Appareils dentaires</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Traitements orthodontiques enfants & adultes.</p>
    </div>
  </router-link>

  <router-link to="/detartrage">

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="200">
        <img src="@/assets/images/cleaning.png" alt="Icone détartrage" class="h-16 mx-auto mb-4" />
        <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Détartrage</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm">Nettoyage professionnel et hygiène buccale.</p>
      </div>
  </router-link>

  <router-link to="/invisalign">

    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="300">
      <img src="@/assets/images/invisaligne.png" alt="Icone Invisalign" class="h-16 mx-auto mb-4" />
      <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Invisalign</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Alignez vos dents sans bagues visibles.</p>
    </div>
  </router-link>

  <router-link to="/prothese">


    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="400">
      <img src="@/assets/images/protheses.png" alt="Icone prothèses dentaires" class="h-16 mx-auto mb-4"/>
      <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Prothèses dentaires</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Solutions fixes ou amovibles adaptées.</p>
    </div>

  </router-link>

  <router-link to="/facettes">


    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="500">
      <img src="@/assets/images/facettes.png" alt="Icone facettes dentaires" class="h-16 mx-auto mb-4"/>
      <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Facettes dentaires</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Sourire parfait grâce à des facettes esthétiques.</p>
    </div>
  </router-link>


  <router-link to="/carie">

    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="600">
      <img src="@/assets/images/carie.png" alt="Icone soin des caries" class="h-16 mx-auto mb-4"/>
      <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Traitement des caries</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Soins efficaces pour préserver vos dents.</p>
    </div>

  </router-link>


  <router-link to="/esthetique">


    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="700">
      <img src="@/assets/images/esthetique.png" alt="Icone esthétique dentaire" class="h-16 mx-auto mb-4"/>
      <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Esthétique dentaire</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Blanchiment et soins pour un sourire éclatant.</p>
    </div>

  </router-link>

    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="700">
      <img src="@/assets/images/esthetique.png" alt="Icone esthétique dentaire" class="h-16 mx-auto mb-4"/>
      <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Esthétique dentaire</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Blanchiment et soins pour un sourire éclatant.</p>
    </div>

  </div>
  </section>

<section class="bg-white dark:bg-gray-900 py-12 px-6 md:px-20">
  <h2 class="text-3xl font-bold text-center mb-12 text-blueMarine dark:text-white" data-aos="fade-up">
      Avant / Après
    </h2>
  <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

    <div class="w-full lg:w-1/2 flex justify-center">
      <BeforeAfter :avant="avantImg" :apres="apresImg" />
    </div>

    <div class="w-full lg:w-1/2 text-center lg:text-left">

      <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        Découvrez les résultats visibles avant et après nos soins professionnels.<br />
        Glissez le curseur pour comparer.
      </p>

      <router-link
        to="/resultats"
        class="inline-block bg-blueFonce hover:bg-blueClair text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
        Découvrez d'autres Résultats
      </router-link>
    </div>

  </div>
</section>




  <section class="text-center py-12 px-6 md:px-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 relative overflow-hidden" data-aos="fade-up" data-aos-duration="800">
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-blue-100 dark:bg-blue-400 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

    <h2 class="text-3xl font-bold text-center mb-6 text-blueMarine dark:text-white" data-aos="fade-up">
      Prise de rendez-vous
    </h2>
    <p class="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-2">
      Prenez rendez-vous chez votre dentiste en toute confiance.
    </p>
    <p class="text-red-500 text-lg md:text-xl mb-6 font-medium">
      Rendez-vous urgent ? <br class="md:hidden" />Téléphonez au
      <a href="tel:+32400100100" class="font-bold underline underline-offset-4 decoration-red-300 cursor-pointer">
        04/00100100
      </a>
    </p>

    <router-link
      to="/rdv"
      class="inline-block bg-blueClair hover:bg-blueFonce text-white font-semibold text-lg py-3 px-8 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer">
      Prendre rendez-vous
    </router-link>
  </section>





  <section class="bg-blue-50 dark:bg-gray-800 py-16 px-6 md:px-20">
    <div class="grid lg:grid-cols-2 gap-10 items-center">
      <div class="w-full h-[300px] rounded-lg overflow-hidden shadow" data-aos="fade-right">
        <iframe
          class="w-full h-full"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.1954956823125!2d4.3401993696242265!3d50.89074534420053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c24aa58729fb%3A0x5d45bfa73181c83b!2sRue%20Reper-Vreven%2053%2C%201020%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1749933875393!5m2!1sfr!2sbe">
        </iframe>
      </div>

      <div class="space-y-6 text-center lg:text-left" data-aos="fade-left">
        <div>
          <h3 class="text-xl font-bold mb-1 text-gray-800 dark:text-white">📍 Adresse</h3>
          <p class="text-gray-700 dark:text-gray-300">Rue Reper-vreven, 1020 Laeken</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-1 text-gray-800 dark:text-white">📞 Téléphone</h3>
          <p class="text-gray-700 dark:text-gray-300">+32 2 123 45 67</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">🕒 Horaires</h3>

          <table class="mx-auto lg:mx-0 text-left text-gray-700 dark:text-gray-300">
            <tbody>
              <tr>
                <td class="pr-4">Lundi - Vendredi :</td>
                <td>8h - 18h</td>
              </tr>
              <tr>
                <td class="pr-4">Samedi :</td>
                <td>8h - 16h</td>
              </tr>
              <tr>
                <td class="pr-4">Dimanche :</td>
                <td class="text-red-500 dark:text-red-400">Fermé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>





  <footer class="bg-gray-900 text-white py-6 text-center">
    <p class="text-sm">&copy; 2025 Johan Dental. Tous droits réservés.</p>
  </footer>




</template>

<style scoped>
.scroll-track {
  white-space: nowrap;
  overflow: hidden;
}
.scroll-content {
  display: inline-block;
  white-space: nowrap;
  animation: scroll-left 30s linear infinite;
}
.group:hover .scroll-content {
  animation-play-state: paused;
}
@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
