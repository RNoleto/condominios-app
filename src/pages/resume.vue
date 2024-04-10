<template>
  <div>Essa é minha página resume</div>
  <!-- Primeira Linha -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    <!-- Card 1 -->
    <div
      class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
    >
      <div class="flex justify-between mb-6">
        <div>
          <div class="flex items-center mb-1">
            <div class="text-2xl font-semibold">200</div>
          </div>
          <div class="text-sm font-medium text-gray-400">Vagas Totais</div>
        </div>
        <div class="dropdown">
          <button
            type="button"
            class="dropdown-toggle text-gray-400 hover:text-gray-600"
          >
            <i class="ri-more-fill"></i>
          </button>
          <ul
            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
            data-popper-id="popper-3"
            data-popper-placement="bottom-end"
            style="
              position: absolute;
              inset: 0px 0px auto auto;
              margin: 0px;
              transform: translate(-1022px, 149px);
            "
          >
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Profile</a
              >
            </li>
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Settings</a
              >
            </li>
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
      <a
        href="/gebruikers"
        class="text-[#f84525] font-medium text-sm hover:text-red-800"
        target="_blank"
        >Ver detalhes</a
      >
    </div>
    <!-- Card 2 -->
    <div
      class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
    >
      <div class="flex justify-between mb-4">
        <div>
          <div class="flex items-center mb-1">
            <div class="text-2xl font-semibold">100</div>
            <div
              class="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2"
            >
              +30%
            </div>
          </div>
          <div class="text-sm font-medium text-gray-400">Automoveis</div>
        </div>
        <div class="dropdown">
          <button
            type="button"
            class="dropdown-toggle text-gray-400 hover:text-gray-600"
          >
            <i class="ri-more-fill"></i>
          </button>
          <ul
            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
            data-popper-id="popper-4"
            data-popper-placement="bottom-end"
            style="
              position: absolute;
              inset: 0px 0px auto auto;
              margin: 0px;
              transform: translate(-535px, 149px);
            "
          >
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Profile</a
              >
            </li>
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Settings</a
              >
            </li>
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
      <a
        href="/dierenartsen"
        class="text-[#f84525] font-medium text-sm hover:text-red-800"
        target="_blank"
        >Ver detalhes</a
      >
    </div>
    <!-- card 3 -->
    <div
      class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
    >
      <div class="flex justify-between mb-6">
        <div>
          <div class="text-2xl font-semibold mb-1">15</div>
          <div class="text-sm font-medium text-gray-400">Usuários</div>
        </div>
        <div class="dropdown">
          <button
            type="button"
            class="dropdown-toggle text-gray-400 hover:text-gray-600"
          >
            <i class="ri-more-fill"></i>
          </button>
          <ul
            class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
            data-popper-id="popper-5"
            data-popper-placement="bottom-end"
            style="
              position: absolute;
              inset: 0px 0px auto auto;
              margin: 0px;
              transform: translate(-49px, 149px);
            "
          >
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Profile</a
              >
            </li>
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Settings</a
              >
            </li>
            <li>
              <a
                class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                target="_blank"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
      <a
        href=""
        class="text-[#f84525] font-medium text-sm hover:text-red-800"
        target="_blank"
        >Ver detalhes</a
      >
    </div>
  </div>
  <!-- Segunda Linha -->
  <div>Linha 2</div>
  <!-- Terceira Linha -->
  <div>Linha 3</div>
</template>

<script>
export default {};
</script>
