<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Interpretación de modelos femeninos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar factores para tener en cuenta en la interpretación de modelosfemeninos. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La manga japonesa destaca por eliminar la costura de la sisa y extender el hombro en una solapieza.  ¿Qué ventaja funcional aporta esta característica al diseño de la prenda?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto: 'Aumenta el volumen en la parte inferior de la manga',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Facilita una caída natural del tejido sobre el brazo ',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Disminuye la movilidad de quien la usa',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'Obliga a reducir la longitud total de la blusa',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 2,
          texto:
            'Las curvas de sisa A‑E determinan el ajuste de la manga ranglán. ¿Cuál de las siguientes líneas genera la manga con mayor ajuste al brazo y la sisa más alta?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto: 'Línea A',
              esCorrecta: true,
            },
            {
              id: '2',
              texto: 'Línea C',
              esCorrecta: false,
            },
            {
              id: '3',
              texto: 'Línea D',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'Línea E',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 3,
          texto:
            'La manga abullonada utiliza frunces para aportar volumen. ¿Dónde se concentran los frunces cuando se busca resaltar el volumen en la zona del antebrazo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto: 'Solo en la corona de la manga',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Tanto en la copa como en el puño',
              esCorrecta: false,
            },
            {
              id: '3',
              texto: 'Únicamente en el puño',
              esCorrecta: true,
            },
            {
              id: '4',
              texto: 'En la costura lateral bajo manga',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 4,
          texto:
            'La manga murciélago presenta gran amplitud desde el hombro hasta la cintura. ¿Cuál es el efecto estilístico principal que se obtiene con esta ampliación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto: 'Silueta entallada en la zona del torso',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Mayor libertad de movimiento y estética relajada',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Reducción del consumo de tela en el corte',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'Disminución del ancho de espalda en la prenda',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 5,
          texto:
            'Al bajar la línea de sisa de A a E, la distancia al costado aumenta. ¿Qué resultado proporciona la selección de la línea E en una manga ranglán?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto: 'Una manga muy ajustada tipo sastre',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Una manga media adecuada para prendas deportivas',
              esCorrecta: false,
            },
            {
              id: '3',
              texto: 'Una manga amplia estilo murciélago u oversize',
              esCorrecta: true,
            },
            {
              id: '4',
              texto:
                'La eliminación de la pinza de busto en el patrón delantero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 6,
          texto:
            'En las piezas de un patrón se dibuja una flecha recta que señala la dirección predominante de los hilos de la tela. ¿Cómo se denomina esta indicación y cuál es su principal función?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto: 'Línea de corte – ayuda a recortar piezas curvas',
              esCorrecta: false,
            },
            {
              id: '2',
              texto:
                'Línea de aplome – Garantiza el comportamiento adecuado del tejido',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Margen de costura – Facilita la unión de las piezas',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'Línea de holgura – Controla el ajuste en tallas grandes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 7,
          texto:
            'Algunas piezas llevan la leyenda “colocar al doblez” en uno de sus bordes. ¿Qué propósito técnico cumple esta instrucción?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto: 'Recordar que la pieza necesita entretela adherida',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Indicar la zona donde se aplicará un pespunte decorativo',
              esCorrecta: false,
            },
            {
              id: '3',
              texto:
                'Evitar costuras adicionales cortando la pieza completa sobre la tela doblada',
              esCorrecta: true,
            },
            {
              id: '4',
              texto:
                'Reducir el consumo de tela recortando márgenes de costura',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 8,
          texto:
            'Los piquetes son pequeñas marcas realizadas en puntos estratégicos del contorno de cada molde. ¿Cuál es la utilidad principal de estos piquetes durante el ensamblaje?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto: 'Decorar los bordes de la prenda con un acabado dentado',
              esCorrecta: false,
            },
            {
              id: '2',
              texto:
                'Alinear correctamente piezas como mangas, costados y bolsillos',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Indicar la ubicación del logo de la marca',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'Reducir la tensión del hilo en costuras curvas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 9,
          texto:
            'En la parte informativa de una pieza se lee: “Cortar 2 en tela – Cortar 1 en entretela”. ¿Para qué sirve especificar la cantidad a cortar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto:
                'Diferenciar entre tejido principal y forro en la prenda terminada',
              esCorrecta: false,
            },
            {
              id: '2',
              texto:
                'Asegurar que se corten todas las capas necesarias para la confección',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Facilitar la gradación de tallas sin ajustes posteriores',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'Señalar la longitud exacta del dobladillo final',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
        {
          id: 10,
          texto:
            'Cada molde incluye un código de referencia vinculado a la ficha técnica del producto. ¿Qué beneficio aporta esta marcación al proceso de producción?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: '1',
              texto:
                'Permite identificar fácilmente el sentido del hilo en la tela',
              esCorrecta: false,
            },
            {
              id: '2',
              texto:
                'Garantiza la correspondencia entre el molde y la colección o línea de diseño',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Indica cuántos centímetros agregar de margen de costura',
              esCorrecta: false,
            },
            {
              id: '4',
              texto:
                'Sirve para ubicar el molde correcto dentro del tizado automático',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Felicitaciones, ha superado la actividad. ',
          mensaje_incorrecto:
            'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentarnuevamente la actividad didáctica. ',
    },
  }),
}
</script>
