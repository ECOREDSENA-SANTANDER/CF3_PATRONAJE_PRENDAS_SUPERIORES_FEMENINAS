<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 A continuación, se presenta un esquema que sintetiza los elementos clave del componente formativo interpretación de modelos femeninos. El proceso inicia con la identificación de simbología y vocabulario técnico en patronaje, seguido se abordan las diferentes variaciones de prendas superiores femeninas con el proceso de trazo, para finalizar con la importancia de los textiles y el aprovechamiento de estos para procesos de corte de prendas de vestir.

    .tarjeta.tarjeta--gris.mb-4
      .row.justify-content-center
        .col-lg-8.p-4.p-lg-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Presenta un diagrama temático titulado “Interpretación de modelos femeninos”, dividido en tres áreas principales. La primera es la señalización de los patrones, que incluye la marcación de piezas. La segunda abarca las variaciones de patrones superiores femeninos, con apartados sobre escotes, cuellos, mangas, vestido casual y ajuste de los patrones. La tercera área corresponde a la chaqueta casual, desglosada en el trazo plano de patronaje y su despiece.")
      
    .row.justify-content-center  
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
