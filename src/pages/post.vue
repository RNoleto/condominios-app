<template>
  <div class="my-2">
    <div class="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <card v-for="card in cards" :key="card.id" class="w-full"
        :class="{ 'bg-blue-100': card.id === 1, 'bg-green-100': card.id === 2, 'bg-yellow-100': card.id === 3, 'bg-gray-100': card.id === 4 }">
        <template #title>
          <div class="text-2xl font-semibold">
            {{ card.title }} - {{ computePostCount(card.title) }}
          </div>
        </template>
        <template #body>
          Inserir porcentagem
        </template>
      </card>
    </div>
  </div>
  <div class="my-2 align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
    <table class="min-w-full">
      <thead>
        <tr>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase traking-wider">
            Titulo
          </th>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase traking-wider">
            Status
          </th>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase traking-wider">
            Categorias
          </th>
          <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr v-for="post in posts" :key="post.id">
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm text-left leading-5 text-gray-700">{{ post.title }}</div>
            <div class="text-xs text-left leading-5 text-gray-500">{{ post.subtitle }}</div>
          </td>
          <td class="px-6 py-4 text-left whitespace-no-wrap border-b border-gray-200">
            <div class="text-left px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              :class="{ 'bg-green-100 text-green-800': post.status === 'Active', 'bg-yellow-100 text-yellow-800': post.status === 'Standby', 'bg-gray-100 text-gray-800': post.status === 'Inactive' }">
              {{ post.status }}
            </div>
          </td>
          <td class="px-6 py-4 text-left whitespace-no-wrap border-b border-gray-200">
            <div class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              :class="{ 'bg-blue-100 text-blue-800': post.category === 'Tecnologia', 'bg-red-100 text-red-800': post.category === 'Saude', 'bg-yellow-100 text-yellow-800': post.category === 'Esporte' }">
              {{ post.category }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <div class="px-2 py-1 text-center bg-blue-500 text-white rounded hover:bg-blue-600">Editar</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import card from '../components/card.vue';

export default {
  components: {
    card
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Total de Posts',
        },
        {
          id: 2,
          title: 'Posts Ativos',
        },
        {
          id: 3,
          title: 'Posts Pausados'
        },
        {
          id: 4,
          title: 'Posts Inativos',
        }
      ],
      posts: [
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
      ]
    };
  },
  methods: {
    computePostCount(title) {
      if (title === 'Total de Posts') {
        return this.posts.length;
      } else if (title === 'Posts Ativos') {
        return this.posts.filter(post => post.status === 'Active').length;
      } else if (title === 'Posts Inativos') {
        return this.posts.filter(post => post.status === 'Inactive').length;
      } else if (title === 'Posts Pausados') {
        return this.posts.filter(post => post.status === 'Standby').length;
      } else {
        return 0;
      }
    },
    editPost(id) {
      const selectedPost = this.posts.find(post => post.id === id);
      this.$router.push({ name: 'PostEdit', params: { id }, state: { post: selectedPost } });
    }
  }
};
</script>