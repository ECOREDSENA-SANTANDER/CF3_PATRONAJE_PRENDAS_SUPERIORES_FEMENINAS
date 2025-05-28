<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Señalización de los patrones

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          img(src="@/assets/curso/temas/t1/1.png")
        .col-lg-7(data-aos="fade-left")
          img.w-85.mb-3.d-none.d-lg-block(src="@/assets/curso/temas/t1/2.svg")
          p En el proceso de patronaje, la señalización y los símbolos constituyen herramientas fundamentales que permiten comprender e interpretar técnicamente los moldes. Estos símbolos guían con precisión el corte, ensamblaje y confección de cada pieza, facilitando la ejecución del diseño sin necesidad de explicaciones orales. A continuación, se detallan los símbolos más utilizados, su propósito y ejemplos prácticos de aplicación:

      .row.justify-content-center.mb-3
        .col-lg-9(data-aos="fade-right")
          TabsA.color-acento-botones
            .tarjeta.bg-1.p-4(titulo="Dirección del hilo")
              h4.mb-4 Dirección del hilo
              ul.lista-ul--color.color-primario.fa-lista.mb-4
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Propósito:] orienta la disposición del patrón en función del hilo de la tela, garantizando el comportamiento adecuado de la prenda.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Representación:] línea vertical con flechas en ambos extremos.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Ejemplo:] en una falda, esta línea debe alinearse con el orillo de la tela.
              .row
                .col-lg-11
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 1.
                    span Símbolo de hilo de tela  
                  figure.mb-1
                    img(src="@/assets/curso/temas/t1/fig1.svg" alt="Presenta la frase “HILO DEL TEJIDO” en orientación vertical, acompañada de dos flechas rectas con doble punta en sentido vertical. Estas indican la dirección correcta del hilo en la tela para colocar el patrón.")
                  figcaption Fuente:   
                    a(href="https://mx.pinterest.com/pin/196117758770451444/" target="_blank") https://mx.pinterest.com/pin/196117758770451444/
            .tarjeta.bg-1.p-4(titulo="Piquetes de ensamble")
              h4.mb-4 Piquetes de ensamble
              ul.lista-ul--color.color-primario.fa-lista.mb-4
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Propósito:] actúan como guías de unión entre piezas coincidentes, como hombros, costados o sisas.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Representación:] marcas cortas perpendiculares al borde del patrón.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Ejemplo:] dos piquetes en la copa de la manga indican el lado trasero; uno solo señala el delantero.
              .row
                .col-lg-11
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 2.
                    span Símbolos de piquetes 
                  figure.mb-1
                    img(src="@/assets/curso/temas/t1/fig2.svg" alt="Contiene la palabra “PIQUETES” dispuesta en forma vertical. A su derecha, hay líneas horizontales acompañadas por uno o dos rombos. Un rombo representa una marca de referencia sencilla en el patrón; dos rombos indican una referencia doble para unir piezas durante la confección.")
                  figcaption Fuente:   
                    a(href="Fuente: https://mx.pinterest.com/pin/196117758770451444/ " target="_blank") Fuente: https://mx.pinterest.com/pin/196117758770451444/ 
            .tarjeta.bg-1.p-4(titulo="Indicadores de doblez")
              h4.mb-4 Indicadores de doblez
              ul.lista-ul--color.color-primario.fa-lista.mb-4
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Propósito:] presentan dónde colocar una pieza sobre el doblez de la tela, eliminando costuras innecesarias.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Representación:] línea recta acompañada del texto “doblez tela” o “colocar al lomo”.  
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Ejemplo:] en un delantero sin costura central, el patrón se coloca justo sobre el doblez.  
              .row
                .col-lg-11
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 3.
                    span Símbolos de doblez de tela  
                  figure.mb-1
                    img(src="@/assets/curso/temas/t1/fig3.svg" alt="Incluye el texto “DOBLEZ DE LA TELA” alineado a la izquierda. A su derecha, hay un símbolo en forma de ángulo recto que indica el borde doblado del tejido. A lo largo de ese borde aparecen tres equis en fila vertical, señalando que esa parte del patrón debe colocarse sobre el doblez de la tela.")
                  figcaption Fuente:   
                    a(href="https://mx.pinterest.com/pin/187321665745552812/" target="_blank") https://mx.pinterest.com/pin/187321665745552812/ 
            .tarjeta.bg-1.p-4(titulo="Márgenes de costura")
              h4.mb-4 Márgenes de costura
              ul.lista-ul--color.color-primario.fa-lista.mb-4
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Propósito:] determinan el espacio adicional necesario para unir las piezas.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Representación:]  líneas punteadas o marcas con la medida añadida (por ejemplo, “+1 cm”). 
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Ejemplo:] en una blusa, se puede aplicar un margen de 1 cm en los costados y 3 cm en el dobladillo.
              .row
                .col-lg-11
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 4. 
                    span Símbolos de margen de costura  
                  figure.mb-1
                    img(src="@/assets/curso/temas/t1/fig4.svg" alt="Presenta el texto “MARGEN DE COSTURA” en orientación vertical. A la derecha, hay dos líneas: una continua que representa el borde del patrón y otra discontinua que indica el espacio añadido para la costura.")
                  figcaption Fuente:   
                    a(href="https://mx.pinterest.com/pin/196117758770451444/" target="_blank") https://mx.pinterest.com/pin/196117758770451444/
            .tarjeta.bg-1.p-4(titulo="Líneas internas")
              h4.mb-4 Líneas internas
              ul.lista-ul--color.color-primario.fa-lista.mb-4
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Propósito:] delimitan elementos estructurales o decorativos como pinzas, pliegues o bolsillos.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Representación:] líneas punteadas, segmentadas o en zigzag.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Ejemplo:] una pinza de busto se representa con líneas que convergen hacia el punto de mayor volumen.
              .row
                .col-lg-11
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 5. 
                    span Símbolos de pinzas  
                  figure.mb-1
                    img(src="@/assets/curso/temas/t1/fig5.svg" alt="Contiene la palabra “PINZAS” alineada horizontalmente. A su derecha, hay dos líneas que parten desde un punto circular y se abren hacia una línea vertical. Una línea es continua y la otra discontinua. ")
                  figcaption Fuente:   
                    a(href="https://mx.pinterest.com/pin/196117758770451444/" target="_blank") https://mx.pinterest.com/pin/196117758770451444/
            .tarjeta.bg-1.p-4(titulo="Centro de la prenda")
              h4.mb-4 Centro de la prenda
              ul.lista-ul--color.color-primario.fa-lista.mb-4
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Propósito:] indica el eje central del diseño, esencial para lograr simetría y ubicación de detalles clave.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Representación:] línea recta etiquetada como “centro frente” o “centro espalda”.
                li
                  i.fas.fa-check-circle
                  span.mb-0 #[strong Ejemplo:] la botonera de una camisa se ubica a lo largo del centro frente.  
              .row
                .col-lg-11
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Figura 6.
                    span Ejemplo patrón con centro frente 
                  figure.mb-1
                    img(src="@/assets/curso/temas/t1/fig6.svg" alt="Representa el trazo técnico de un patrón base para prenda superior femenina. Incluye el delantero a la izquierda y la espalda a la derecha, divididos en secciones por líneas horizontales y verticales. Están marcadas zonas como hombros, centros (frente y espalda), ubicación de pinzas y mitades del cuello. La estructura general permite identificar claramente cada parte del molde para su interpretación en confección.")
                  figcaption Fuente: SENA, (2025)
        .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
          img(src="@/assets/curso/temas/t1/3.png")


      Separador

      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Marcaciones de piezas

      .row.align-items-center.mb-5
        .col-lg-1.col-md-2.col-3(data-aos="fade-right")
          img(src="@/assets/curso/temas/t1/4.svg")
        .col-lg-11.col-md-10.col-9(data-aos="fade-left")
          p.mb-0 En un despiece de patronaje, cada pieza debe ser marcada de forma técnica, clara y estandarizada para garantizar su correcta interpretación durante el proceso de corte y confección. Estas marcas permiten identificar la función de cada molde, su orientación en el tejido, y las instrucciones necesarias para ensamblar la prenda con precisión.

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/temas/t1/subt.svg")
        h3.ps-3.pe-4.mb-0 Información esencial que debe incluir cada pieza del patrón

      .row.justify-content-center
        .col-lg-8(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario")
            .row.justify-content-center(titulo="Nombre de la pieza")
              .col-11
                p Indica qué parte de la prenda representa (ejemplo: delantero, espalda, manga, cuello, puño).
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Función: facilita la identificación y organización de las partes durante el montaje.
            .row.justify-content-center(titulo="Referencia del diseño o código del modelo")
              .col-11
                p Asociada al nombre del producto o ficha técnica.
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Función: permite rastrear el diseño dentro de una colección o línea de producción.
            .row.justify-content-center(titulo="Talla")
              .col-11
                p Especifica la medida correspondiente al molde.
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Función: evita confusiones entre moldes similares de diferentes tallas.
            .row.justify-content-center(titulo="Cantidad a cortar")
              .col-11
                p Indica cuántas veces debe ser cortada la pieza en tela, forro o entretela.
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Ejemplo: “cortar 2 en tela – cortar 1 en entretela”.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Función: asegura que todas las capas necesarias sean incluidas.
            .row.justify-content-center(titulo="Sentido del hilo (línea de hilo o aplome)")
              .col-11
                p Representado con una flecha recta, indica la dirección del hilo de la tela.
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Función: garantiza el comportamiento adecuado del tejido y el calce correcto.
            .row.justify-content-center(titulo="Indicaciones de simetría o doblez de tela")
              .col-11
                p Cuando una pieza se corta al lomo (doblez), debe incluir la leyenda “colocar al doblez”.
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Función: evita costuras innecesarias y asegura que se corte una pieza completa.
            .row.justify-content-center(titulo="Simbología de piquetes")
              .col-11
                p Son pequeñas marcas que se hacen en bordes estratégicos para ayudar al ensamblaje.
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Función: alinean correctamente piezas como mangas, costados, bolsillos o pinzas.
            .row.justify-content-center(titulo="Nombre del patronista o responsable")
              .col-11
                p Se anota para control interno del proceso.
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Función: permite rastrear modificaciones o validar patrones antes de producción.     
            .row.justify-content-center(titulo="Observaciones adicionales (opcional)")
              .col-11
                p Puede incluir instrucciones como: “con entretela”, “con dobladillo”, “pieza invertida”, etc.
                ul.lista-ul--color.color-primario.fa-lista
                  li
                    i.fas.fa-check-circle
                    span.mb-0 Función: aclara necesidades específicas del diseño o material.  
            .row.justify-content-center(titulo="Importancia de la marcación en el despiece")
              .col-11
                p La marcación adecuada en el despiece asegura la coherencia del proceso de confección, evita errores en el corte, optimiza tiempos de producción y garantiza que cada persona del equipo pueda interpretar los moldes de forma autónoma. En entornos formativos, su dominio refuerza la comprensión de la lógica constructiva de una prenda, promueve la estandarización del lenguaje técnico y mejora la calidad del producto final.
        .col-lg-4.col-md-8.col-10(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 7. 
            span Patrón con especificaciones técnicas 
          figure.mb-2
            img(src="@/assets/curso/temas/t1/fig7.png" alt="Es una ficha técnica de estampado para un pantalón deportivo. Incluye el molde con la ubicación del diseño, medidas del estampado, carta de color con tres tonos codificados y datos técnicos como método de aplicación, escala, proveedor y fecha de producción.")
          figcaption Fuente:   
            a(href="https://ayelenpellegrino.com/wp-content/uploads/2010/02/fichadeestampa.jpg" target="_blank") https://ayelenpellegrino.com/wp-content/uploads/2010/02/fichadeestampa.jpg
            


  </template>

<script>
export default {
  name: 'Tema1',
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
