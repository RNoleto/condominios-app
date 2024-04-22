<template>
  <!-- Primeira Linha -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    <!-- Card 1 -->
    <card>
      <template #title>
        <!-- Conteúdo personalizado do título -->
        <div>
          <div class="text-2xl font-semibold">{{ customTitle }}</div>
          <div class="text-sm font-medium text-gray-400">{{ customSubtitle }}</div>
        </div>
      </template>
      <template #body>
        <!-- Conteúdo personalizado do corpo -->
        <a href="/gebruikers" class="text-[#f84525] font-medium text-sm hover:text-red-800" target="_blank">{{
          customLinkText }}</a>
      </template>
    </card>
    <!-- Card 2 -->
    <div class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
      <div class="flex justify-between mb-4">
        <div>
          <div class="flex items-center mb-1">
            <div class="text-2xl font-semibold">100</div>
            <div class="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
              +30%
            </div>
          </div>
          <div class="text-sm font-medium text-gray-400">Automoveis</div>
        </div>
        <div class="dropdown">
          <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600">
            <i class="ri-more-fill"></i>
          </button>
          <ul
            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
            data-popper-id="popper-4" data-popper-placement="bottom-end" style="
              position: absolute;
              inset: 0px 0px auto auto;
              margin: 0px;
              transform: translate(-535px, 149px);
            ">
            <li>
              <a class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank">Profile</a>
            </li>
            <li>
              <a class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank">Settings</a>
            </li>
            <li>
              <a class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <a href="/dierenartsen" class="text-[#f84525] font-medium text-sm hover:text-red-800" target="_blank">Ver
        detalhes</a>
    </div>
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
      card: {
      },
      customTitle: '112',
      customSubtitle: "Imoveis Totais",
      customLinkText: 'Ver detalhes personalizado',
    };
  }
};
</script>