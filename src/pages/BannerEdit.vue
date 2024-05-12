<template>
  <div class="mx-auto mt-5">
    <div v-if="selectedBanner" class="m-2">
      <div class="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 shadow-md"
        @click="openFileInput">
        <input type="file" @change="handleFileInputChange" class="hidden" ref="imageInput">
        <label for="bannerImage" class="block w-full h-64 cursor-pointer">
          <img :src="selectedBanner.imageSrc"
            class="block w-full h-64 object-cover transition duration-300 transform group-hover:scale-105"
            alt="Banner Image">
        </label>
        <div
          class="flex absolute inset-0 flex flex-col justify-end p-4 bg-gray-900 bg-opacity-70 text-white transition duration-300 opacity-0 group-hover:opacity-100">
          <h1 class="text-lg font-bold">Clique para trocar de imagem</h1>
          <h1 class="text-lg font-bold">{{ selectedBanner.title }}</h1>
          <span class="w-max px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            v-if="selectedBanner.status === 'Active'">{{ selectedBanner.status }}</span>
          <span
            class="w-max px-2 text-left inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
            v-else>{{ selectedBanner.status }}</span>
        </div>
      </div>
      <div class="justify-between mt-4 mb-4">
        <label class="flex text-gray-700 text-sm font-bold mb-2" for="title">Título:</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title" type="text" v-model="selectedBanner.title" placeholder="Título">
      </div>
      <div class="mb-4 w-full">
        <label class="flex text-gray-700 text-sm font-bold mb-2" for="status">Status:</label>
        <select
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="status" v-model="selectedBanner.status">
          <option value="Active">Ativo</option>
          <option value="Inactive">Inativo</option>
        </select>
      </div>
      <div class="flex justify-end">
        <button @click="saveBanner" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Salvar</button>
      </div>
    </div>
    <div v-else>
      Nenhum banner selecionado.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerData: [
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
        },
        {
          id: 6,
          title: "Estilo de vida",
          imageSrc: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
          status: "Active"
        }
      ],
      selectedBannerId: 0,
      newImageFile: null
    }
  },
  created() {
    this.selectedBannerId = parseInt(this.$route.params.id);
  },
  computed: {
    selectedBanner() {
      return this.bannerData.find(banner => banner.id === this.selectedBannerId);
    }
  },
  methods: {
    openFileInput() {
      this.$refs.imageInput.click();
    },
    handleFileInputChange(event) {
      this.newImageFile = event.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedBanner.imageSrc = reader.result;
      };
      reader.readAsDataURL(this.newImageFile);
    },
    saveBanner() {
      if (!this.selectedBanner) {
        console.error('Nenhum banner selecionado.');
        return;
      }

      // Atualizar a imagem do banner se uma nova imagem foi selecionada
      if (this.newImageFile) {
        // Lógica para salvar a nova imagem (pode ser uma chamada a uma API ou armazenamento local)
        console.log('Nova imagem salva:', this.newImageFile);
        this.newImageFile = null; // Limpar a nova imagem após salvar
      }

      // Redirecionar para a página de banners após salvar
      this.$router.push('/banners');
    }
  }
}
</script>