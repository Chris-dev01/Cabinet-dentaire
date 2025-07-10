<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView } from 'vue-router'

const isOpen = ref(false)
const menuRef = ref(null)

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow">
    <div class="flex items-center justify-between px-6 py-4">
      <router-link to="/" class="flex items-center space-x-2">
        <img src="@/assets/images/logo-johan-dental.png" alt="Logo" class="h-20 w-auto" />
      </router-link>

      <button @click.stop="isOpen = !isOpen" class="md:hidden text-gray-800 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav class="hidden md:flex space-x-6 items-center">
        <router-link to="/" class="text-gray-800 hover:text-blueClair font-medium">Accueil</router-link>
        <router-link to="/equipe" class="text-gray-800 hover:text-blueClair font-medium">Notre Équipe</router-link>
        <router-link to="/services" class="text-gray-800 hover:text-blueClair font-medium">Services</router-link>
        <router-link to="/contact" class="text-gray-800 hover:text-blueClair font-medium">Contact</router-link>
        <router-link
          to="/rdv"
          class="bg-blueClair hover:bg-blueFonce active:scale-95 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-200">
          Prendre RDV
        </router-link>
      </nav>
    </div>

    <transition name="slide-fade">
      <nav
        v-if="isOpen"
        ref="menuRef"
        class="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col md:hidden z-40"
      >
        <router-link @click="isOpen = false" to="/" class="px-6 py-3 text-gray-800 hover:bg-gray-100">Accueil</router-link>
        <router-link @click="isOpen = false" to="/equipe" class="px-6 py-3 text-gray-800 hover:bg-gray-100">Notre Équipe</router-link>
        <router-link @click="isOpen = false" to="/services" class="px-6 py-3 text-gray-800 hover:bg-gray-100">Services</router-link>
        <router-link @click="isOpen = false" to="/contact" class="px-6 py-3 text-gray-800 hover:bg-gray-100">Contact</router-link>
        <router-link
          @click="isOpen = false"
          to="/rdv"
          class="px-6 py-3 text-white bg-blueClair hover:bg-blueFonce  font-semibold text-center">
          Prendre RDV
        </router-link>
      </nav>
    </transition>
  </header>

  <main class="pt-[110px]">
    <RouterView />
  </main>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
