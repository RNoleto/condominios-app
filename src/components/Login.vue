<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="h-screen font-sans login bg-cover">
    <div class="container mx-auto h-full flex flex-1 justify-center items-center">
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form class="backdrop-blur-sm bg-black/30 max-w-sm m-4 p-10 bg-opacity-25 rounded shadow-xl">
            <router-link to="/">
              <div class="flex justify-center lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Condominios</span>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                </a>
              </div>
            </router-link>
            <p class="text-white font-medium text-center text-lg font-bold">
              LOGIN
            </p>
            <div class="">
              <label class="block text-sm text-white text-start font-bold" for="email">E-mail</label>
              <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="email" id="email" placeholder="Digite o e-mail" aria-label="email" required />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-white text-start font-bold">Senha</label>
              <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="password" id="password" placeholder="Digite a sua senha" arial-label="password" required />
            </div>

            <div class="mt-4 items-center flex justify-between">
              <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                type="submit">
                Entrar
              </button>
              <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                href="#">Esqueceu a senha ?</a>
            </div>
            <div class="text-center">
              <a class="inline-block right-0 align-baseline font-light text-sm text-white text-500 hover:text-red-400">
                <router-link to="/register">Criar uma conta</router-link>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.login {
  /* background: url("https://tailwindadmin.netlify.app/dist/images/login-new.jpeg"); */
  background: url("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");


  /* background: url("http://bit.ly/2gPLxZ4"); */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>