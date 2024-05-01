<template>
  <div>
    <!-- Modal para edição de categoria -->
    <div v-if="editModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-8 w-1/3">
        <h2 class="text-lg font-semibold mb-4">Editar Categoria</h2>
        <input type="text" v-model="editedCategoryName" class="border rounded px-3 py-2 w-full mb-4">
        <div class="flex justify-end gap-5">
          <button @click="cancelEdit" class="text-gray-500 hover:text-gray-700">Cancelar</button>
          <button @click="saveEdit" class="text-blue-500 hover:text-blue-700">Salvar</button>
          <button @click="deleteCategory" class="text-red-500 hover:text-red-700">Excluir</button>
        </div>
      </div>
    </div>

    <input type="text" v-model="newCategoryName" placeholder="Nova categoria">
    <button @click="addCategory"
      class="px-2 py-1 text-center bg-blue-500 text-white rounded hover:bg-blue-600 ml-5">Adicionar</button>
  </div>
  <div>
    <h2 class="text-xl font-semibold mb-4">Lista de Categorias</h2>
    <ul class="flex">
      <li v-for="category in categories" :key="category.id">
        <span class="cursor-pointer border text-left px-2 text-sm leading-5 font-semibold rounded-full m-2"
          @click="openEditModal(category)">{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: 'Tecnologia', color: 'bg-blue-100 text-blue-800' },
        { id: 2, name: 'Saúde', color: 'bg-red-100 text-red-800' },
        { id: 3, name: 'Esporte', color: 'bg-green-100 text-green-800' },
      ],
      newCategoryName: '',
      editModalOpen: false,
      editedCategory: null,
      editedCategoryName: ''
    };
  },
  methods: {
    addCategory() {
      if (this.newCategoryName.trim() !== '') {
        const newCategory = {
          id: this.categories.length + 1,
          name: this.newCategoryName.trim()
        };
        this.categories.push(newCategory);
        this.newCategoryName = '';
      }
    },
    openEditModal(category) {
      this.editedCategory = category;
      this.editedCategoryName = category.name;
      this.editModalOpen = true;
    },
    cancelEdit() {
      this.editModalOpen = false;
    },
    saveEdit() {
      if (this.editedCategoryName.trim() !== '') {
        this.editedCategory.name = this.editedCategoryName.trim();
        this.editModalOpen = false;
      }
    },
    deleteCategory() {
      const confirmDelete = confirm(`Tem certeza que deseja excluir a categoria "${this.editedCategory.name}"?`);
      if (confirmDelete) {
        const index = this.categories.findIndex(c => c.id === this.editedCategory.id);
        if (index !== -1) {
          this.categories.splice(index, 1);
          this.editModalOpen = false;
        }
      }
    }
  }
};
</script>
