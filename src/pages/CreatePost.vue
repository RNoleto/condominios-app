<template>
  <div class="container mx-auto py-10">
    <h2 class="text-2xl font-semibold mb-5">Editar Postagem</h2>

    <form v-if="editedPost" @submit.prevent="savePost">
      <div class="flex flex-col mb-5">
        <label for="title" class="mb-2">Título do Post:</label>
        <input type="text" id="title" class="border border-gray-300 rounded-md p-2 w-full" v-model="editedPost.title" />
      </div>

      <div class="flex flex-col mb-5">
        <label for="status" class="mb-2">Categoria do Post:</label>
      </div>

      <div class="flex flex-col mb-5">
        <label for="content" class="mb-2">Conteúdo do Post:</label>
        <textarea id="content" class="border border-gray-300 rounded-md p-2 w-full h-40 resize-none"></textarea>
      </div>

      <div class="flex flex-row justify-between">
        <div class="flex items-center">
          <input type="checkbox" id="saveDraft" class="mr-2" />
          <label for="saveDraft" class="text-gray-600">Salvar em Rascunho</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="saveDraft" class="mr-2" />
          <label for="saveDraft" class="text-gray-600">Publicar</label>
        </div>
        <button type="submit" class="bg-blue-500 text-white font-medium py-2 px-4 rounded-md">
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>
<script>
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
        },
        {
          id: 2,
          title: 'Como a I.A pode ajudar nos estudos',
          subtitle: 'Conheça as principais ferramentas',
          status: 'Inactive',
          category: 'Tecnologia',
        },
        {
          id: 3,
          title: 'Casos de dengue na cidade',
          subtitle: 'Cuidados que você deve tomar na sua casa',
          status: 'Standby',
          category: 'Saude',
        },
        {
          id: 4,
          title: 'Carreira Devs',
          subtitle: 'Saíba por onde começar',
          status: 'Active',
          category: 'Tecnologia',
        },
      ]
    }
  },
  created() {
    const postId = parseInt(this.$route.params.id);
    this.editedPost = this.postData.find(post => post.id === postId);
  },
  methods: {
    saveChanges() {

    }
  }
}
</script>