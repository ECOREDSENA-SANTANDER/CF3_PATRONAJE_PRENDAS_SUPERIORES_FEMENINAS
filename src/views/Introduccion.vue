<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3.mb-lg-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La interpretación del patronaje de prendas superiores femeninas es una habilidad técnica y creativa que permite transformar ideas en prendas reales, funcionales y adaptadas a distintas corporalidades. A través del análisis de escotes, cuellos, mangas y otras variaciones, quienes se forman en este campo desarrollan un entendimiento profundo de cómo se construye una prenda desde la base. Este conocimiento no solo mejora la precisión en la confección, sino que también impulsa la capacidad de crear propuestas con identidad propia y sentido estético, considerando siempre la comodidad, el ajuste y la diversidad de cuerpos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11(data-aos="fade-right")
        p El impacto de esta competencia es clave en el entorno profesional del diseño y la confección, ya que permite optimizar procesos, responder a tendencias y necesidades del mercado, y generar productos de calidad que representen una mirada inclusiva y consciente. Esta formación es impartida por el Servicio Nacional de Aprendizaje – SENA, institución comprometida con el desarrollo de talento humano altamente calificado para el sector de la moda.
      .col-lg-1.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/2.svg', alt='')

    .row.justify-content-center.align-items-center(data-aos="fade-down")         
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
