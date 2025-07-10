<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-gray-800">Confirmation</h2>

    <div class="bg-gray-50 p-4 rounded shadow space-y-2 text-gray-700">
      <p><strong>Dentiste :</strong> {{ formData.dentiste }} ({{ formData.specialite }})</p>
      <p><strong>Date :</strong> {{ formData.date }}</p>
      <p><strong>Heure :</strong> {{ formData.creneau }}</p>
      <p><strong>Nom :</strong> {{ formData.nom }} {{ formData.prenom }}</p>
      <p><strong>Email :</strong> {{ formData.email }}</p>
      <p><strong>Téléphone :</strong> {{ formData.telephone }}</p>
    </div>

    <div class="flex justify-between mt-6">
      <button class="btn btn-secondary" @click="$emit('precedent')">← Précédent</button>
      <button class="btn btn-primary" @click="envoyer">Confirmer le rendez-vous</button>
    </div>

    <p v-if="confirmation" class="text-green-600 font-semibold mt-4">✅ Rendez-vous confirmé avec succès !</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['formData'])
const confirmation = ref(false)

function envoyer() {
  // En vrai ici, tu feras un appel API POST
  console.log('RDV envoyé:', props.formData)
  confirmation.value = true
}
</script>
