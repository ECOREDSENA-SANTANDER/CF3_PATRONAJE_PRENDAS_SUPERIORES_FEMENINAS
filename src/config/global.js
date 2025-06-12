export default {
  global: {
    Name: 'Interpretación de modelos femeninos',
    Description:
      'En este componente formativo se profundiza en la transformación de patrones base de corpiño y manga para confeccionar blusas y vestidos entallados. Se exploran variaciones de escotes, cuellos y mangas que amplían las posibilidades de diseño, incorpora la construcción de prendas especializadas como <em>crop tops</em>, y chaquetas ligeras. Cada diseño se materializa en una muestra, evaluada en maniquí o modelo para detectar ajustes necesarios. Se aplican técnicas de balance, corrección de sisas y ajuste de holguras hasta alcanzar un calce profesional. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Señalización de los patrones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marcaciones de piezas',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variaciones patrones superiores femeninos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Variaciones de mangas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Transformaciones de sisas y mangas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Vestido casual',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: '<em>Crop tops</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Ajuste de los patrones',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Chaqueta casual',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Variaciones patrones superiores femeninos',
      referencia: 'Castro, G. (2019). Guía práctica de patronaje.',
      tipo: 'Página web',
      link:
        'https://es.scribd.com/document/411438766/Guia-Practica-de-Patronaje',
    },
    {
      tema: 'Variaciones patrones superiores femeninos',
      referencia:
        'Universidad Peruana de Ciencias Aplicadas (UPC). (2021). Patronaje y Confección II - Mujer. Lima, Perú. ',
      tipo: 'Libro',
      link:
        'https://upc.aws.openrepository.com/bitstream/handle/10757/662943/DM204_Patronaje_y_Confeccion_II_-_Mujer_202102.pdf?isAllowed=y&sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Corte princesa',
      significado:
        'línea estructural que va desde el hombro o la sisa, pasando por el busto y descendiendo hasta el bajo de la prenda, aportando ajuste y definición a la silueta femenina.',
    },
    {
      termino: '<em>Crop top</em>',
      significado:
        'prenda superior con un diseño más corto que la blusa tradicional, generalmente termina por encima de la cintura, dejando parte del abdomen expuesto.',
    },
    {
      termino: 'Despiece',
      significado:
        'proceso de división de una prenda en todas sus piezas individuales, detallando sus formas, dimensiones y materiales, para facilitar su confección organizada.',
    },
    {
      termino: 'Escalado',
      significado:
        'técnica utilizada para generar diferentes tallas de una misma prenda a partir de un patrón base, manteniendo las proporciones y formas del diseño original.',
    },
    {
      termino: 'Escote en "V"',
      significado:
        'tipo de escote que forma un ángulo hacia abajo en la parte frontal del torso, creando visualmente una figura en "v" que estiliza el cuello y el pecho.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento técnico que reúne toda la información clave para la producción de una prenda: medidas, materiales, instrucciones de confección, diseño y acabados.',
    },
    {
      termino: 'Manga kimono',
      significado:
        'manga amplia y continua al cuerpo, sin cortes en la sisa o el hombro, característica por su comodidad y apariencia relajada.',
    },
    {
      termino: 'Manga ranglán',
      significado:
        'diseño de manga que se une al cuello mediante una línea diagonal hacia la sisa, eliminando la costura tradicional del hombro y brindando mayor movilidad.',
    },
    {
      termino: 'Muesca o piquete',
      significado:
        'pequeña marca colocada en el borde de los moldes que sirve como guía para alinear correctamente las piezas durante la costura.',
    },
    {
      termino: 'Patronaje',
      significado:
        'disciplina que consiste en crear moldes o plantillas con base en medidas específicas, para construir prendas ajustadas al cuerpo humano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldrich, W. (2008). Metric pattern cutting for women’s wear (5th ed.). Wiley-Blackwell.',
      link: '',
    },
    {
      referencia:
        'Hall, S. J. (2021). Basic biomechanics (9th ed.). McGraw-Hill Education.',
    },
    {
      referencia:
        'Norton, K. (2019). Anthropometry and biomechanics: Foundations for human movement analysis. Routledge. ',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (1995). El estado físico: uso e interpretación de la antropometría. ',
    },
    {
      referencia:
        'SENA – Servicio Nacional de Aprendizaje. (2011). Manual de patronaje básico e interpretación de diseños. Bogotá: SENA, Japan International Cooperation Agency (JICA).',
    },
    {
      referencia:
        'SENA – Servicio Nacional de Aprendizaje. (2020). Equipo de diseño curricular. Técnico en patronaje industrial de prendas de vestir.',
    },
    {
      referencia:
        'SENA – Servicio Nacional de Aprendizaje. (2021). Equipo de diseño curricular. Técnico en Elaboración de prendas de vestir sobre medidas. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
