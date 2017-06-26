<template>
  <section>
    <div class="row">
      <gif v-for="gif in lista.slice((pagination.currentPage-1)*itemPorPagina,pagination.currentPage*itemPorPagina)" :key="gif" :imagem="gif.images.fixed_height.url" :nome="gif.slug" :url="gif.url"></gif>
    </div>
    <br />
    <div class="row">
      <uib-pagination :total-items="lista.length" v-model="pagination" :max-size="maxSize" :items-per-page="itemPorPagina" :boundary-links="true" :force-ellipses="true"
       first-text="Início" last-text="Fim" next-text="<" previous-text=">"></uib-pagination>
     </div>
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
      maxSize: 3
    }
  }
}
</script>
<style>
.pagination{
  display: inline-flex;
  margin: 0 auto;
}
li.pagination-first,
li.pagination-prev,
li.pagination-page,
li.pagination-next,
li.pagination-last {
  box-sizing: border-box;
}
li.pagination-first a,
li.pagination-prev a,
li.pagination-page a,
li.pagination-next a,
li.pagination-last a{
  text-decoration: none;
  border: 1px solid #ddd;
  float: left;
  position: relative;
  margin-left: -1px;
  padding: 6px 9px;
}
</style>
