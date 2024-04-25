<template>
  <div>
    <h1>Banners</h1>
    <div class="flex justify-between gap-10 my-2">
      <div class="flex gap-5 w-full">
        <card v-for="(cardData, index) in cards" :key="index" class="w-full">
          <template #title>
            <div>
              <div class="text-2xl font-semibold">{{ cardData.title }}</div>
              <div class="text-sm font-medium text-gray-400">{{ cardData.subtitle }}</div>
            </div>
          </template>
          <template #body>
            <!-- Conteúdo personalizado do corpo -->
            <a :href="cardData.link" class="text-[#f84525] font-medium text-sm hover:text-red-800" target="_blank">
              {{ cardData.linkText }}
            </a>
          </template>
        </card>
      </div>
    </div>
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div v-for="banner in banners" :key="banner.id" class="m-2">
        <div class="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 shadow-md">
          <img :src="banner.imageSrc"
            class="block w-full h-72 object-cover transition duration-300 transform group-hover:scale-105"
            alt="Banner Image">
          <div
            class="flex absolute inset-0 flex flex-col justify-end p-4 bg-gray-900 bg-opacity-70 text-white transition duration-300 opacity-0 group-hover:opacity-100">
            <h1 class="text-lg font-bold">{{ banner.title }}</h1>
            <span
              class="w-max px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
              v-if="banner.status === 'Active'">{{
                banner.status }}</span>
            <span
              class="w-max px-2 text-left inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
              v-if="banner.status === 'Inactive'">{{ banner.status }}</span>
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <p class="text-gray-400"> {{ banner.title }}</p>
          <button @click="editBanner(banner.id)"
            class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Editar</button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import card from "../components/card.vue";

export default {
  components: {
    card
  },
  data() {
    return {
      cards: [
        {
          title: "Total de Banners",
          subtitle: "Subtítulo do Cartão 1",
          link: "/gebruikers",
          linkText: "Texto do Link 1"
        },
        {
          title: "Total de Banners Ativos",
          subtitle: "Subtítulo do Cartão 2",
          link: "/gebruikers",
          linkText: "Texto do Link 2"
        },
        {
          title: "Total de Banners Inativos",
          subtitle: "Subtítulo do Cartão 3",
          link: "/gebruikers",
          linkText: "Texto do Link 3"
        }
      ],
      banners: [
        {
          id: 1,
          title: "Titulo Banner 1",
          imageSrc: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?q=80&w=2659&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          status: "Active"
        },
        {
          id: 2,
          title: "Titulo Banner 2",
          imageSrc: "https://plus.unsplash.com/premium_photo-1678823283560-4453bbd2a368?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          status: "Inactive"
        },
        {
          id: 3,
          title: "Titulo Banner 3",
          imageSrc: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          status: "Inactive"
        }
      ]
    };
  }
};
</script>
