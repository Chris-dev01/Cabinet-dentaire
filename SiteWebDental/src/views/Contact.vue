<script>
export default {
  name: 'Contact',
}
</script>

<template>
  <section class="w-full min-h-screen bg-gray-100 py-16 px-4">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

      <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-10">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Contactez-nous</h2>
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Prénom</label>
              <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Téléphone</label>
            <input type="tel" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">E-mail</label>
            <input type="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>

          <div>

            <button
              type="submit"
              class="w-full  bg-blueClair hover:bg-blueFonce text-white font-semibold text-lg py-3 px-8 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-6 space-y-6">

        <!-- Horaires + Adresse -->
        <div class="bg-blueClair text-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <h3 class="text-xl font-semibold mb-3">Horaires</h3>
            <ul class="space-y-1 text-sm">
              <li class="flex justify-between pb-1">
                <span>Lundi - Vendredi</span>
                <span>08h - 18h</span>
              </li>
              <li class="flex justify-between pb-1">
                <span>Samedi</span>
                <span>08h - 16h</span>
              </li>
              <li class="flex justify-between">
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          <div class="pt-4 border-t border-blue-100">
            <h3 class="text-xl font-semibold mb-1">Adresse</h3>
            <p class="text-sm">Rue Reper-Vreven<br />1020 Laeken</p>
          </div>
        </div>

        <!-- Urgences -->
        <div class="bg-gray-100 text-black p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-2">Urgences</h3>
          <p class="text-2xl font-bold">04/100/100</p>
          <p class="text-sm text-gray-600 mt-1">Disponible 24h/24 - 7j/7</p>
        </div>
      </div>


    </div>
  </section>
</template>
