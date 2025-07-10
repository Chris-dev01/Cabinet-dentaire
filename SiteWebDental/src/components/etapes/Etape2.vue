<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-gray-800">Choisissez un créneau disponible</h2>

    <div class="flex items-center gap-4">
      <button @click="changerJour(-1)" class="btn">←</button>
      <h3 class="text-lg font-semibold">{{ jourActuel.toLocaleDateString('fr-FR', options) }}</h3>
      <button @click="changerJour(1)" class="btn">→</button>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-4">
      <div
        v-for="creneau in creneauxDisponibles"
        :key="creneau"
        @click="selectionnerCreneau(creneau)"
        :class="['p-3 text-center rounded shadow cursor-pointer transition hover:shadow-lg',
                formData.creneau === creneau ? 'bg-blue-100 border border-blue-400' : 'bg-white']"
      >
        {{ creneau }}
      </div>
    </div>

    <div class="flex justify-between mt-6">
      <button class="btn btn-secondary" @click="$emit('precedent')">← Précédent</button>
      <button class="btn btn-primary" :disabled="!formData.creneau" @click="$emit('suivant')">Continuer →</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['formData'])
const emit = defineEmits(['majDonnees'])

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const jourActuel = ref(new Date())

const horairesParJour = [
  '09:00', '10:00', '11:00',
  '14:00', '15:00', '16:00'
]

const creneauxDisponibles = horairesParJour // (Tu pourras les filtrer via ton backend plus tard)

function changerJour(delta) {
  jourActuel.value.setDate(jourActuel.value.getDate() + delta)
  emit('majDonnees', {
    date: jourActuel.value.toISOString().split('T')[0],
    creneau: ''
  })
}

function selectionnerCreneau(creneau) {
  emit('majDonnees', {
    date: jourActuel.value.toISOString().split('T')[0],
    creneau: creneau
  })
}
</script>
