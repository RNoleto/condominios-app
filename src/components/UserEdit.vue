<template>
  <div>
    <h1>Editar Usuário</h1>
    <div>
      <label for="name">Nome:</label>
      <input type="text" v-model="editedUser.name">
    </div>
    <!-- Outros campos de edição... -->
    <button @click="saveChanges">Salvar Alterações</button>
    <button @click="deleteUser">Excluir Usuário</button>
  </div>
</template>

<script>
export default {
  props: ['id'], // recebendo o id do usuário como propriedade

  data() {
    return {
      editedUser: {} // objeto para armazenar os dados do usuário em edição
    };
  },

  created() {
    // Aqui você deve buscar os dados do usuário com o id recebido
    // e preencher o objeto editedUser com esses dados
    this.fetchUserData(this.id);
  },

  methods: {
    fetchUserData(id) {
      // Aqui você faria uma chamada à sua API para buscar os dados do usuário com o id fornecido
      // Exemplo de como seria a chamada:
      // axios.get(`/api/users/${id}`).then(response => {
      //   this.editedUser = response.data;
      // }).catch(error => {
      //   console.error('Erro ao buscar dados do usuário:', error);
      // });
      // Por enquanto, vamos apenas simular os dados:
      this.editedUser = {
        id: id,
        name: 'Nome do Usuário',
        // Outros campos do usuário...
      };
    },

    saveChanges() {
      // Aqui você enviaria os dados editados do usuário para sua API salvar
      // Exemplo de como seria a chamada:
      // axios.put(`/api/users/${this.editedUser.id}`, this.editedUser).then(response => {
      //   console.log('Usuário atualizado com sucesso:', response.data);
      // }).catch(error => {
      //   console.error('Erro ao atualizar usuário:', error);
      // });
    },

    deleteUser() {
      // Aqui você enviaria uma requisição para sua API excluir o usuário
      // Exemplo de como seria a chamada:
      // axios.delete(`/api/users/${this.editedUser.id}`).then(response => {
      //   console.log('Usuário excluído com sucesso:', response.data);
      // }).catch(error => {
      //   console.error('Erro ao excluir usuário:', error);
      // });
    }
  }
};
</script>
