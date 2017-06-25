<template>
  <div class="text-center">
    <app-header></app-header>
    <section class="section p-2" id="about">
      <div class="container">
        <div class="row w-75 mx-auto">
          <div class="col-md-12">
            <h1 class="mb-4">Sobre o Pokédex de Gifs</h1>
            <p class="lead">Este é um trabalho desenvolvido com o framework Vue.js com Webpack, Babel, ESLint com o Standart Javascript.</p>
          </div>
        </div>
      </div>
    </section>
    <galeria></galeria>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './header'
import AppFooter from './Footer'
import Galeria from './Galeria'
export default {
  name: 'main',
  components: {AppHeader, AppFooter, Galeria},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
