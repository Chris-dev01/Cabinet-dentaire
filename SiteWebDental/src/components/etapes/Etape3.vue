<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-gray-800">Vos informations</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input v-model="localData.nom" type="text" placeholder="Nom" class="champ" />
      <input v-model="localData.prenom" type="text" placeholder="Prénom" class="champ" />
      <input v-model="localData.email" type="email" placeholder="Email" class="champ" />
      <input v-model="localData.telephone" type="tel" placeholder="Téléphone" class="champ" />
    </div>

    <div class="flex justify-between mt-6">
      <button class="btn btn-secondary" @click="$emit('precedent')">← Précédent</button>
      <button
        class="btn btn-primary"
        :disabled="!formulaireValide"
        @click="valider"
      >Continuer →</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'

const props = defineProps(['formData'])
const emit = defineEmits(['majDonnees', 'suivant'])

const localData = reactive({
  nom: props.formData.nom || '',
  prenom: props.formData.prenom || '',
  email: props.formData.email || '',
  telephone: props.formData.telephone || ''
})

const formulaireValide = computed(() =>
  localData.nom &&
  localData.prenom &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localData.email) &&
  /^[0-9\s+]{6,15}$/.test(localData.telephone)
)

function valider() {
  emit('majDonnees', { ...localData })
  emit('suivant')
}
</script>

