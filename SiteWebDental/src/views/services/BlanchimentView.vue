<script setup>
import FicheTraitement from "@/components/FicheInfo.vue";

const titre = "Blanchiment dentaire";
const description = "Redonnez de l'éclat à votre sourire grâce à des techniques sûres, efficaces et professionnelles.";
const imageSrc = "src/assets/images/whitening.jpg";

const points = [
  "Améliore l'apparence du sourire.",
  "Efface les taches dues au café, tabac, vin, etc.",
  "Renforce la confiance en soi."
];

const contenu = [
  "Le soin est sans douleur et s'adapte à la sensibilité dentaire de chaque patient.",
  "Nous proposons des kits à domicile sur mesure pour un blanchiment professionnel."
];
</script>

<template>
  <FicheTraitement
    :titre="titre"
    :description="description"
    :imageSrc="imageSrc"
    :points="points"
    :contenu="contenu"
  />
</template>
