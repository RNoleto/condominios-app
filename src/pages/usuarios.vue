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
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full"
                      src="https://ovicio.com.br/wp-content/uploads/2023/03/20230324-ovicio-john-wick-duracao-555x555.jpg"
                      alt="" />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">Jhon Wick</div>
                    <div class="text-sm leading-5 text-gray-500">jhon@wick.com</div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                <div class="text-sm leading-5 text-gray-500">Web Dev Fullstack</div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                Proprietario
              </td>

              <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Editar</a>
              </td>

            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full"
                      src="https://miro.medium.com/v2/resize:fit:1358/0*c0fhyexwkpHRy1pB.jpg" alt="" />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">Mr. Ninguém</div>
                    <div class="text-sm leading-5 text-gray-500">nobody@email.com</div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                <div class="text-sm leading-5 text-gray-500">Web dev</div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Standby</span>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">Product
                Owner
              </td>

              <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Editar</a>
              </td>

            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://i.ytimg.com/vi/Ez0h5d3_w3k/maxresdefault.jpg"
                      alt="" />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">Duncan Vizla</div>
                    <div class="text-sm leading-5 text-gray-500">polar@assassin.com</div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                <div class="text-sm leading-5 text-gray-500">Dev Backend</div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Standby</span>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">Team
                Leader
              </td>

              <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Editar</a>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>