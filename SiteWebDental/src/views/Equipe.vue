<script>
  import TeamCard from "@/components/TeamCard.vue";

  export default {
    components: {
      TeamCard,
    },
  };
</script>

<template>
  <section class="py-12 px-4 bg-gray-100 dark:bg-gray-900">
      <h1 class="text-3xl font-bold text-center mb-12 text-blueMarine dark:text-white" data-aos="fade-up">
        Notre Équipe</h1>
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <TeamCard
        image="\src\assets\images\docteur1.jpg"
        nom="Dr. Julien Morel"
        specialite="Dentisterie Générale"
      />
      <TeamCard
        image="\src\assets\images\docteur2.jpg"
        nom="Dr. Antoine Lefèvre"
        specialite="Orthodontie"
      />
      <TeamCard
        nom="Dr. Élodie Marchand"
        specialite="Orthodontie"
      />
      <TeamCard
        image="src\assets\images\docteur3.png"
        nom="Dr. Sophie Martin"
        specialite="Pédodontie"
      />
    </div>
  </section>
</template>
