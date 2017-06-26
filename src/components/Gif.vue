<template>
  <div class="col-md-6 col-lg-4">
    <img :src="imagem" class="center-block img-fluid my-3 img-thumbnail">
    <h3 style="color: #FF540D">{{nome}}</h3>
    <button class="btn btn-secondary" :href="url"
      v-clipboard:copy="url"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">Copiar Link<i class="fa fa-fw fa-clipboard"></i></button>
  </div>
</template>
<script>
export default {
  name: 'gif',
  props: ['imagem', 'nome', 'url'],
  methods: {
    onCopy: function (e) {
      alert('Você copiou: ' + e.text)
    },
    onError: function (e) {
      alert('Falha ao copiar')
    }
  }
}
</script>
<style></style>
