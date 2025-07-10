<script setup>
import { ref, reactive } from 'vue'
import FilAriane from '@/components/FilAriane.vue'
import Etape1 from '@/components/etapes/Etape1.vue'
import Etape2 from '@/components/etapes/Etape2.vue'
import Etape3 from '@/components/etapes/Etape3.vue'
import Etape4 from '@/components/etapes/Etape4.vue'

const currentStep = ref(1)

const getComposant = () => {
  switch (currentStep.value) {
    case 1: return Etape1
    case 2: return Etape2
    case 3: return Etape3
    case 4: return Etape4
    default: return Etape1
  }
}

const formData = reactive({
  dentiste: '',
  specialite: '',
  date: '',
  creneau: '',
  nom: '',
  prenom: '',
  email: '',
  telephone: ''
})

const nextStep = () => {
  if (currentStep.value < 4) currentStep.value++
}
const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

// Fonction appelée par chaque étape pour mettre à jour formData
const majDonnees = (donnees) => {
  Object.assign(formData, donnees)
}
</script>

<template>
  <section class="min-h-screen py-10 px-4 bg-gray-50">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
      <FilAriane :step="currentStep" />

      <transition name="fade" mode="out-in">
        <component
          :is="getComposant()"
          :formData="formData"
          @suivant="nextStep"
          @precedent="prevStep"
          @majDonnees="majDonnees"
          :key="currentStep"
        />
      </transition>
    </div>
  </section>
</template>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
