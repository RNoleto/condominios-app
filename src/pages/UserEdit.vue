<template>
  <div v-if="editedUser" class="max-w-lg mx-auto mt-10">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4 flex items-center justify-center">
        <div class="flex items-center">
          <img class="w-32 h-32 rounded-full mr-4" :src="editedUser.avatar" alt="Avatar do usuário">
          <input class="hidden" id="avatar" type="file" accept="image/*" @change="handleAvatarChange">
          <!-- <label for="avatar" class="cursor-pointer text-blue-500 hover:text-blue-700">Escolher arquivo</label> -->
        </div>
      </div>
      <div class="flex gap-2">
        <div class="mb-4">
          <label class="flex text-gray-700 text-sm font-bold mb-2" for="name">Nome:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" v-model="editedUser.name" placeholder="Nome">
        </div>
        <div class="mb-4">
          <label class="flex text-gray-700 text-sm font-bold mb-2" for="email">Email:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" v-model="editedUser.email" placeholder="Email">
        </div>
      </div>
      <div class="flex gap-2">
        <div class="mb-4">
          <label class="flex text-gray-700 text-sm font-bold mb-2" for="title">Título:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title" type="text" v-model="editedUser.title" placeholder="Título">
        </div>
        <div class="mb-4">
          <label class="flex text-gray-700 text-sm font-bold mb-2" for="subtitle">Subtítulo:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subtitle" type="text" v-model="editedUser.subtitle" placeholder="Subtítulo">
        </div>
      </div>
      <div class="flex gap-2">
        <div class="mb-4 w-full">
          <label class="flex text-gray-700 text-sm font-bold mb-2" for="status">Status:</label>
          <select
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status" v-model="editedUser.status">
            <option value="Active">Ativo</option>
            <option value="Inactive">Inativo</option>
            <option value="Standby">Espera</option>
          </select>
        </div>
        <div class="mb-6 w-full">
          <label class="flex text-gray-700 text-sm font-bold mb-2" for="category">Categoria:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category" type="text" v-model="editedUser.category" placeholder="Categoria">
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="saveChanges">Salvar</button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="deleteChanges">Excluir</button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Nenhum usuario encontrado</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedUser: null,
      userData: [
        {
          id: 1,
          name: 'Jhon Wick',
          email: 'jhon@wick.com',
          avatar: 'https://ovicio.com.br/wp-content/uploads/2023/03/20230324-ovicio-john-wick-duracao-555x555.jpg',
          title: 'Software Engineer',
          subtitle: 'Web Dev Fullstack',
          status: 'Standby',
          category: 'Proprietario'
        },
        {
          id: 2,
          name: 'Mr. Ninguém',
          email: 'nobody@mail.com',
          avatar: 'https://miro.medium.com/v2/resize:fit:1358/0*c0fhyexwkpHRy1pB.jpg',
          title: 'Software Engineer',
          subtitle: 'Tester',
          status: 'Inactive',
          category: 'Freelancer'
        },
        {
          id: 3,
          name: 'Duncan Vizla',
          email: 'polar@assassin.com',
          avatar: 'https://i.ytimg.com/vi/Ez0h5d3_w3k/maxresdefault.jpg',
          title: 'Software Engineer',
          subtitle: 'Web Dev Backend',
          status: 'Standby',
          category: 'Freelancer'
        }
      ]
    };
  },
  created() {
    const userId = parseInt(this.$route.params.id);
    this.editedUser = this.userData.find(user => user.id === userId);
  },
  methods: {
    saveChanges() {
      // Aqui você pode enviar as alterações para o servidor
      console.log('Dados do usuário editados:', this.editedUser);
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
