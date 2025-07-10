<script>
  import TeamCard from "@/components/TeamCard.vue";
  import { fetchDentists } from "@/service/dentistService";

  export default {
    data(){
      return{
        dentistes : [],
        loading: true,
      }
    },
    components: {
      TeamCard,
    },
    async mounted(){
      this.dentistes = await fetchDentists()
      this.loading = false;
    }
  };
</script>

<template>
  <section class="py-12 px-4 bg-gray-100 dark:bg-gray-900">
      <h1 class="text-3xl font-bold text-center mb-12 text-blueMarine dark:text-white" data-aos="fade-up">
        Notre Équipe</h1>
      <div v-if="loading" class="text-center text-gray-500">Chargement de l'équipe ...</div>
      <div v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <TeamCard
        v-for="dentiste in dentistes"
        :key="dentiste.id"
        :image="dentiste.images ?? 'src/assets/images/default.jpg'"
        :nom="dentiste.nom"
        :specialite="dentiste.specialite"
        data-aos="fade-up"
      />
    </div>
  </section>
</template>
