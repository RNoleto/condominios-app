<template>
  <div class="container mx-auto py-10">
    <h2 class="text-2xl font-semibold mb-5">Editar Postagem</h2>

    <form v-if="editedPost" @submit.prevent="savePost">
      <div class="flex flex-col mb-5">
        <label for="title" class="mb-2">Título do Post:</label>
        <input type="text" id="title" class="border border-gray-300 rounded-md p-2 w-full" v-model="editedPost.title" />
      </div>

      <div class="flex flex-col mb-5">
        <label for="category" class="mb-2">Categoria do Post:</label>
        <select id="category" v-model="editedPost.category" class="border border-gray-300 rounded-md p-2 w-full">
          <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
        </select>
      </div>

      <div class="flex flex-col mb-5">
        <label for="content" class="mb-2">Conteúdo do Post:</label>
        <textarea id="content"
          class="border border-gray-300 rounded-md p-2 w-full h-40 resize-none">{{ editedPost.content }}</textarea>
      </div>

      <div class="flex flex-row justify-between">
        <div class="flex items-center">
          <input type="checkbox" id="saveDraft" class="mr-2" />
          <label for="saveDraft" class="text-gray-600">Salvar em Rascunho</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="publish" class="mr-2" />
          <label for="publish" class="text-gray-600">Publicar</label>
        </div>
        <button type="submit" class="bg-blue-500 text-white font-medium py-2 px-4 rounded-md">
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      editedPost: null,
      postData: [
        {
          id: 1,
          title: 'Prática de exercicio nesse verão',
          subtitle: 'Inicie na calistenia',
          status: 'Active',
          category: 'Esporte',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 2,
          title: 'Como a I.A pode ajudar nos estudos',
          subtitle: 'Conheça as principais ferramentas',
          status: 'Inactive',
          category: 'Tecnologia',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 3,
          title: 'Casos de dengue na cidade',
          subtitle: 'Cuidados que você deve tomar na sua casa',
          status: 'Standby',
          category: 'Saude',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 4,
          title: 'Carreira Devs',
          subtitle: 'Saíba por onde começar',
          status: 'Active',
          category: 'Tecnologia',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
      ],
      categories: [
        { id: 1, name: 'Tecnologia' },
        { id: 2, name: 'Saude' },
        { id: 3, name: 'Esporte' },
      ]
    }
  },
  created() {
    const postId = parseInt(this.$route.params.id);
    this.editedPost = this.postData.find(post => post.id === postId);
  },
  methods: {
    savePost() {
      // Lógica para salvar as alterações no post
    }
  }
}
</script>
