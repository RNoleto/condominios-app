<template>
  <div class="bg-white home">
    <Header />
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-indigo-900/10 hover:ring-indigo-900/20">
            Conheça um pouco mais sobre nossa proposta. <a href="#" class="font-semibold text-indigo-600"><span
                class="absolute inset-0" aria-hidden="true"></span>Leia mais <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Gerenciamento Eficiente para Condomínios
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-800">O nosso software oferece uma solução completa para gestão de condomínios, proporcionando um ambiente integrado para imobiliárias, síndicos e moradores. Simplifique processos, otimize recursos e melhore a comunicação entre os envolvidos.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Conheça nossos planos</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Leia mais <span
                aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
    <section>
      <h1>Aqui vem uma sessão</h1>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
export default {
  components: {
    Header,
  },
};
</script>
<style>
.home {
  /* background: url("https://tailwindadmin.netlify.app/dist/images/login-new.jpeg"); */
  background: url("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

  /* background: url("http://bit.ly/2gPLxZ4"); */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>