<template>
  <div class="container mx-auto py-10">
    <h2 class="text-2xl font-semibold mb-5">Criar Postagem</h2>

    <form @submit.prevent="savePost">
      <div class="flex flex-col mb-5">
        <label for="title" class="mb-2">Título do Post:</label>
        <input type="text" id="title" class="border border-gray-300 rounded-md p-2 w-full" />
      </div>

      <div class="flex flex-col mb-5">
        <label for="status" class="mb-2">Status do Post:</label>
        <select id="status" class="border border-gray-300 rounded-md p-2 w-full">
          <option value="draft">Rascunho</option>
          <option value="published">Publicado</option>
        </select>
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

}
</script>