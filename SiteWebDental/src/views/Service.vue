<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

const services = [
  {
    title: 'Appareils dentaires',
    description: 'Traitements orthodontiques enfants & adultes.',
    imgSrc: 'src/assets/images/braces.png',
    alt: 'Icone appareil dentaire',
    link: '/appareil-dentaire',
    delay: 100
  },
  {
    title: 'Détartrage',
    description: 'Nettoyage professionnel et hygiène buccale.',
    imgSrc: 'src/assets/images/cleaning.png',
    alt: 'Icone détartrage',
    link: '/detartrage',
    delay: 200
  },
  {
    title: 'Aligneur',
    description: 'Alignez vos dents sans bagues visibles.',
    imgSrc: 'src/assets/images/invisaligne.png',
    alt: 'Icone Aligneur',
    link: '/Aligneur',
    delay: 300
  },
  {
    title: 'Prothèses dentaires',
    description: 'Solutions fixes ou amovibles adaptées.',
    imgSrc: 'src/assets/images/protheses.png',
    alt: 'Icone prothèses dentaires',
    link: '/prothese',
    delay: 400
  },
  {
    title: 'Facettes dentaires',
    description: 'Sourire parfait grâce à des facettes esthétiques.',
    imgSrc: 'src/assets/images/facettes.png',
    alt: 'Icone facettes dentaires',
    link: '/facettes',
    delay: 500
  },
  {
    title: 'Traitement des caries',
    description: 'Soins efficaces pour préserver vos dents.',
    imgSrc: 'src/assets/images/carie.png',
    alt: 'Icone soin des caries',
    link: '/carie',
    delay: 600
  },
  {
    title: 'Esthétique dentaire',
    description: 'Soins ethetique pour un sourire éclatant.',
    imgSrc: 'src/assets/images/esthetique.png',
    alt: 'Icone esthétique dentaire',
    link: '/esthetique',
    delay: 700
  },
    {
    title: 'Blanchiment dentaire',
    description: 'Blanchiment pour un sourire éclatant.',
    imgSrc: 'src/assets/images/esthetique.png',
    alt: 'Icone blanchiment dentaire',
    link: '/blanchiment',
    delay: 800
  },
]
</script>

<template>
  <section class="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-20 transition-colors duration-500">
    <h2 class="text-3xl font-bold text-center mb-12 text-blueMarine dark:text-white" data-aos="fade-up">
      Nos services
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        v-bind="service"
      />
    </div>
  </section>
</template>
