<template>
  <section class="pt-5 bg-opaque mask my-2" id="speakers">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h1 class="mb-4">Galeria de Gifs</h1>
          <div class="row">
            <div class="col-md-12">
              <form class="form-inline" role="search" @submit.prevent="filtrarLista()">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="procurar gif..." v-model="gifProcurado" size="12">
                </div>
                <button type="submit" class="btn btn-default"><i class="fa fa-fw fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <lista-gif :lista="listaPesquisada"></lista-gif>
    </div>
  </section>
</template>
<script>
import ListaGif from './ListaGif'
export default {
  name: 'galeria',
  components: {ListaGif},
  data () {
    return {
      listaPesquisada: [],
      gifProcurado: ''
    }
  },
  computed: {
    lista () {
      return this.$store.state.lista
    }
  },
  mounted () {
    this.axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: '38302bed4a7543899b368c64a7ef231f',
        limit: 60
      }
    })
    .then(response => {
      console.log(response)
      this.adicionar(response.data.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  watch: {
    gifProcurado (val) {
      if (val === '') {
        this.listaPesquisada = this.lista
      }
    }
  },
  methods: {
    filtrarLista () {
      this.listaPesquisada = this._.filter(this.lista, repo => repo.slug.indexOf(this.gifProcurado) >= 0)
    },
    adicionar (data) {
      this.$store.commit('SET_LISTA', data)
      this.listaPesquisada = data
    }
  }
}
</script>
<style>
</style>
