<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Chaqueta casual

    .row.bgc-1.align-items-center.p-2.p-md-3.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-12
              p.mb-4 A continuación, se presenta el patronaje de la chaqueta tipo #[em Levi's] en #[em denim].
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-7
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 41. 
                span Chaqueta para dama tipo #[em Levi's] en #[em denim] 
              figure.mb-2
                img(src='@/assets/curso/temas/t3/fig41.svg', alt='Presenta una chaqueta en denim ilustrada desde el frente y la parte posterior. El diseño incluye cuello camisero, bolsillos con tapa en el pecho, botonadura central, costuras decorativas visibles y puños ajustados. En la parte trasera se observan cortes verticales y una pretina con botones decorativos en los laterales.')  
              figcaption Fuente: 
                a(href="https://mx.pinterest.com/pin/23995810510176060/" target="_blank") https://mx.pinterest.com/pin/23995810510176060/
            .col-lg-5.d-none.d-lg-block
              img(src="@/assets/curso/temas/t3/1.png")

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.mb-3.mb-md-0
          img(src="@/assets/curso/temas/t3/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 PDF. Anexo_1_patronaje_de_Chaqueta
              p.mb-0 Plano del patrón delantero, posterior, manga y cuello.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_Patronaje_Chaqueta.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
