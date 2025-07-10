
<script setup>
import { reactive, toRefs } from 'vue'
const props = defineProps(['formData'])
const emit = defineEmits(['majDonnees'])

const dentistes = [
  { nom: 'Dr. Dupont', specialite: 'Orthodontie' },
  { nom: 'Dr. Lefèvre', specialite: 'Implantologie' },
  { nom: 'Dr. Moreau', specialite: 'Esthétique' }
]

function selectionner(dentiste) {
  emit('majDonnees', {
    dentiste: dentiste.nom,
    specialite: dentiste.specialite
  })
}
</script>



<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-gray-800">Choisissez votre dentiste</h2>

    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="dentiste in dentistes"
        :key="dentiste.nom"
        @click="selectionner(dentiste)"
        :class="['p-4 rounded-lg shadow cursor-pointer transition hover:shadow-lg',
                formData.dentiste === dentiste.nom ? 'bg-blue-100 border border-blue-400' : 'bg-white']"
      >
        <h3 class="font-semibold">{{ dentiste.nom }}</h3>
        <p class="text-sm text-gray-600">{{ dentiste.specialite }}</p>
      </div>
    </div>

    <div class="flex justify-between mt-6">
      <button disabled class="btn btn-disabled">Précédent</button>
      <button class="btn btn-primary" :disabled="!formData.dentiste" @click="$emit('suivant')">Continuer</button>
    </div>
  </div>
</template>
