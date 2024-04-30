<template>
  <div class="rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
    <div class="flex justify-between mb-6">
      <div>
        <!-- Slot para o Título -->
        <slot name="title">
          <div class="text-2xl font-semibold mb-1">{{ defaultTitle }}</div>
          <div class="text-sm font-medium text-gray-400">{{ defaultSubtitle }}</div>
        </slot>
      </div>
      <div class="dropdown">
        <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600">
          <i class="ri-more-fill"></i>
        </button>
        <!-- Menu dropdown omitido para brevidade -->
      </div>
    </div>

    <!-- Slot para o Corpo do Card -->
    <slot name="body">
      <a href="/gebruikers" class="text-[#f84525] font-medium text-sm hover:text-red-800" target="_blank">{{
        defaultLinkText }}</a>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    defaultTitle: {
      type: String,
      default: "200", // Título padrão se não for passado como prop
    },
    defaultSubtitle: {
      type: String,
      default: "Imóveis Totais", // Subtítulo padrão se não for passado como prop
    },
    defaultLinkText: {
      type: String,
      default: "Ver detalhes", // Texto do link padrão se não for passado como prop
    },
  },
};
</script>