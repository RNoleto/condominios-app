<template>

  <div class="my-2">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <card v-for="card in cards" :key="card.id" class="w-full"
        :class="{ 'bg-blue-100': card.title === 'Total de Banners', 'bg-green-100': card.title === 'Total de Banners Ativos', 'bg-gray-100': card.title === 'Total de Banners Inativos' }">
        <template #title>
          <div class="text-2xl font-semibold">
            {{ card.title }} - {{ computeBannerCount(card.title) }}
          </div>
          <div class="text-sm font-medium text-gray-400">
            {{ card.subtitle }}
          </div>
        </template>
        <template #body>
          <a :href="card.link" class="text-[#f84525] font-medium text-sm hover:text-red-800" target="_blank">
            {{ card.linkText }}
          </a>
        </template>
      </card>
    </div>
  </div>

  <!-- <div class="mx-auto mt-10 flex">
    <div class="flex justify-between mt-2">
      <router-link class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" to="#">Adicionar novo
        banner</router-link>
    </div>
  </div> -->

  <!-- Modal para adicionar novo banner -->
  <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg">
      <h2 class="text-lg font-semibold mb-4">Adicionar Novo Banner</h2>
      <input v-model="newBanner.title" type="text" placeholder="Título" class="mb-2 w-full p-2 border rounded">
      <!-- Imagem da Internet -->
      <!-- <input v-model="newBanner.imageSrc" type="text" placeholder="URL da Imagem"
        class="mb-2 w-full p-2 border rounded"> -->
      <!-- Exibição da imagem -->
      <img v-if="newBanner.imageSrc" :src="newBanner.imageSrc" alt="Imagem do Banner" class="mb-2 w-full">
      <!-- Imagens do PC -->
      <input type="file" @change="handleFileInputChange" class="mb-2 w-full p-2 border rounded">
      <select v-model="newBanner.status" class="mb-2 w-full p-2 border rounded">
        <option value="Active">Ativo</option>
        <option value="Inactive">Inativo</option>
      </select>
      <div class="flex justify-end">
        <button @click="saveNewBanner"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Salvar</button>
        <button @click="closeModal" class="px-4 py-2 ml-2 border rounded hover:bg-gray-200">Cancelar</button>
      </div>
    </div>
  </div>

  <!-- Botão para abrir modal -->
  <div class="mx-auto mt-10 flex">
    <div class="flex justify-between mt-2">
      <button @click="openModal" class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Adicionar novo
        banner</button>
    </div>
  </div>

  <!-- Todos os banners -->
  <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <div v-for="banner in banners" :key="banner.id" class="m-2">
      <div class="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 shadow-md">
        <img :src="banner.imageSrc"
          class="block w-full h-32 object-cover transition duration-300 transform group-hover:scale-105"
          alt="Banner Image">
        <div
          class="flex absolute inset-0 flex flex-col justify-end p-4 bg-gray-900 bg-opacity-70 text-white transition duration-300 opacity-0 group-hover:opacity-100">
          <h1 class="text-lg font-bold">{{ banner.title }}</h1>
          <span class="w-max px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            v-if="banner.status === 'Active'">{{
              banner.status }}</span>
          <span
            class="w-max px-2 text-left inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
            v-if="banner.status === 'Inactive'">{{ banner.status }}</span>
        </div>
      </div>
      <div class="flex justify-between mt-2">
        <p class="text-gray-400"> {{ banner.title }}</p>
        <router-link class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          :to="{ name: 'BannerEdit', params: { id: banner.id } }">
          Editar
        </router-link>
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
      isModalOpen: false,
      newBanner: {
        title: '',
        imageSrc: null,
        imageFile: null,
        status: 'Active'
      },
      cards: [
        {
          id: 1,
          title: "Total de Banners",
          subtitle: "Subtítulo do Cartão 1",
          link: "/gebruikers",
          linkText: "Texto do Link 1"
        },
        {
          id: 2,
          title: "Total de Banners Ativos",
          subtitle: "Subtítulo do Cartão 2",
          link: "/gebruikers",
          linkText: "Texto do Link 2"
        },
        {
          id: 3,
          title: "Total de Banners Inativos",
          subtitle: "Subtítulo do Cartão 3",
          link: "/gebruikers",
          linkText: "Texto do Link 3"
        }
      ],
      banners: [
        {
          id: 1,
          title: "Inovação",
          imageSrc: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?q=80&w=2659&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          status: "Active"
        },
        {
          id: 2,
          title: "Dinheiro",
          imageSrc: "https://plus.unsplash.com/premium_photo-1678823283560-4453bbd2a368?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          status: "Inactive"
        },
        {
          id: 3,
          title: "Pet Friends",
          imageSrc: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          status: "Inactive"
        },
        {
          id: 4,
          title: "Memes",
          imageSrc: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldHN8ZW58MHx8MHx8fDA%3D",
          status: "Inactive"
        },
        {
          id: 5,
          title: "Tecnologia",
          imageSrc: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjbm9sb2d5fGVufDB8fDB8fHww",
          status: "Active"
        }
      ]
    };
  },
  methods: {
    computeBannerCount(title) {
      if (title === "Total de Banners") {
        return this.banners.length;
      } else if (title === "Total de Banners Ativos") {
        return this.banners.filter(banner => banner.status === "Active").length;
      } else if (title === "Total de Banners Inativos") {
        return this.banners.filter(banner => banner.status === "Inactive").length;
      } else {
        return 0; // Retorna 0 se o título não corresponder a nenhum dos casos acima
      }
    },
    editBanner(id) {
      // Definir o banner selecionado com base no ID passado
      const selectedBanner = this.banners.find(banner => banner.id === id);
      this.$router.push({ name: 'BannerEdit', params: { id }, state: { banner: selectedBanner } });
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    handleFileInputChange(event) {
      const file = event.target.files[0];
      this.newBanner.imageFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.newBanner.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    },
    saveNewBanner() {
      if (!this.newBanner.title || !this.newBanner.imageSrc) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      this.banners.push({
        id: this.banners.length + 1,
        title: this.newBanner.title,
        imageSrc: this.newBanner.imageSrc,
        status: this.newBanner.status
      });

      // Limpe os campos e feche o modal
      this.newBanner.title = '';
      this.newBanner.imageSrc = null;
      this.newBanner.imageFile = null;
      this.newBanner.status = 'Active';
      this.isModalOpen = false;
    }
  }
};
</script>
