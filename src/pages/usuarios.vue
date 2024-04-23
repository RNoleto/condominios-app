<template>
  <div class="mt-8">
  </div>
  <div class="flex flex-col mt-8">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nome</th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Titulo</th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status</th>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Categoria</th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="user in userData" :key="user.id">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="user.avatar" alt="Avatar do usuário" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">{{ user.name }}</div>
                    <div class="text-sm leading-5 text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm text-left leading-5 text-gray-900">{{ user.title }}</div>
                <div class="text-sm text-left leading-5 text-gray-500">{{ user.subtitle }}</div>
              </td>
              <td class="px-6 text-left py-4 whitespace-no-wrap border-b border-gray-200">
                <span v-if="user.status === 'Active'"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{{
                    user.status }}</span>
                <span v-else-if="user.status === 'Standby'"
                  class="px-2 text-left inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">{{
                    user.status }}</span>
                <span v-else
                  class="px-2 text-left inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">{{
                    user.status }}</span>
              </td>
              <td
                class="px-6 text-left py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                {{ user.category }}
              </td>
              <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <router-link :to="{ name: 'UserEdit', params: { id: user.id }, state: { user: user } }"
                  class="text-indigo-600 hover:text-indigo-900">Editar</router-link>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: [
        {
          id: 1,
          name: 'Jhon Wick',
          email: 'jhon@wick.com',
          avatar: 'https://ovicio.com.br/wp-content/uploads/2023/03/20230324-ovicio-john-wick-duracao-555x555.jpg',
          title: 'Software Engineer',
          subtitle: 'Web Dev Fullstack',
          status: 'Active',
          category: 'Proprietario'
        },
        {
          id: 2,
          name: 'Mr. Ninguém',
          email: 'nobody@mail.com',
          avatar: 'https://miro.medium.com/v2/resize:fit:1358/0*c0fhyexwkpHRy1pB.jpg',
          title: 'Software Engineer',
          subtitle: 'Tester',
          status: 'standby',
          category: 'Freelancer'
        },
        {
          id: 3,
          name: 'Duncan Vizla',
          email: 'polar@assassin.com',
          avatar: 'https://i.ytimg.com/vi/Ez0h5d3_w3k/maxresdefault.jpg',
          title: 'Software Engineer',
          subtitle: 'Web Dev Backend',
          status: 'Active',
          category: 'Freelancer'
        }
      ]
    }
  }
}
</script>