<template>
  <section>
    <div class="row">
      <gif v-for="gif in lista.slice((pagination.currentPage-1)*itemPorPagina,pagination.currentPage*itemPorPagina)" :key="gif" :imagem="gif.images.fixed_height.url" :nome="gif.slug" :url="gif.url"></gif>
    </div>
    <uib-pagination :total-items="lista.length" v-model="pagination" :max-size="maxSize" :items-per-page="itemPorPagina"
     class="pagination-sm" :boundary-links="true" :force-ellipses="true"
     first-text="Primeira página" last-text="Última página" next-text="Próximo" previous-text="Anterior"></uib-pagination>
  </section>
</template>
<script>
import Gif from './Gif'
export default {
  name: 'listagif',
  props: ['lista'],
  components: {Gif},
  data () {
    return {
      pagination: { currentPage: 1 },
      itemPorPagina: 6,
      setPage (pageNo) {
        this.pagination1.currentPage = pageNo
      },

      pageChanged () {
        console.log('Page changed to: ' + this.pagination1.currentPage)
      },
      maxSize: 5
    }
  }
}
</script>
<style>
.container {
    padding-top: 10px;
}

.pagination {
    display: flex;
}
</style>
