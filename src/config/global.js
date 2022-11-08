export default {
  global: {
    componenteFormativo: 'Plan de promotoría y medios de divulgación',
    descripcionCurso:
      'Este componente se centra en identificar los conceptos y definiciones de la promotoría, las principales características y metodologías que debe tener un programa de promotoría, estableciendo las estrategias y responsabilidades propias y pertinentes. Asimismo, conceptos de acciones de mejora, toma de decisiones e indicadores de verificación de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Promotoría y medios de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características y metodologías',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estrategias y responsabilidades',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Programas de promotoría y divulgación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aplicación y presupuesto',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Equipos de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos y características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnica de moderación de equipos de trabajo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cronogramas de trabajo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Conceptos, tipos y características',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Acciones de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Ciclos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas y herramientas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Toma de decisiones e indicadores de verificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Herramientas y métodos para la toma de decisiones',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnicas de análisis de la información',
            hash: 't_4_2',
          },
        ],
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
      tema: 'Promotoría y medios de comunicación',
      referencia:
        'Inmaculada de Parla. (2013). <i>Definición de promotor</i> [video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PGfzrE9owiE',
    },
    {
      tema: 'Equipos de trabajo',
      referencia:
        'Briceño, B. (2016). <i>Roles de un equipo de trabajo<i> [video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0M7TcfJ86eo',
    },
    {
      tema: 'Acciones de mejora',
      referencia:
        'Kasuga, A. (2016). <i>¿Mejora continua en la empresa?</i> [video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BO6q0fzq_lU',
    },
    {
      tema: 'Herramientas y métodos para la toma de decisiones',
      referencia:
        'Castaño, M. (2020). <i>Herramientas estratégicas para toma de decisiones</i> [video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zV5JIXui0k8',
    },
  ],
  glosario: [
    {
      termino: 'Actuar',
      significado:
        'Se toman las mejores acciones en busca de obtener buenos resultados.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Es una herramienta para organizar las actividades y trabajos a desarrollar en un periodo de tiempo establecido.',
    },
    {
      termino: 'FODA',
      significado:
        'Identifica las fortalezas, oportunidades, debilidades y amenazas.',
    },
    {
      termino: 'Hacer',
      significado:
        'Se implementan aquellos procesos que permiten alcanzar los objetivos.',
    },
    {
      termino: 'Indicador',
      significado:
        'Es aquel que permite dar un veredicto, permitiendo juzgar los resultados que se han obtenido.',
    },
    {
      termino: 'Planear',
      significado:
        'Se establecen objetivos en busca de obtener buenos resultados.',
    },
    {
      termino: 'Producto',
      significado:
        'Se debe conocer al detalle las bondades y propiedades de los productos, ya sean positivas o negativas.',
    },
    {
      termino: 'Promotoría',
      significado:
        'Son las ocupaciones diseñadas para ofrecer soluciones a los puntos de ventas para el fomento de las ventas y la atención de nuevos clientes.',
    },
    {
      termino: 'Técnica',
      significado:
        'Conjunto de procedimientos para lograr un objetivo mediante acciones y habilidades.',
    },
    {
      termino: 'Verificar',
      significado:
        'Se mide el proceso que se lleva observando qué desempeño tiene.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrés, Á. (2020). <i>Cronograma de un proyecto: ¿qué es y cómo crearlo?</i> [Blog Bizneo].',
      link: 'https://www.bizneo.com/blog/cronograma/',
    },
    {
      referencia:
        'Bantu Group (s.f.). <i>3 estrategias para implementar procesos de mejora continua efectivos</i>. Bantu Group.',
      link:
        'https://www.bantugroup.com/blog/estrategias-para-implementar-procesos-de-mejora-continua',
    },
    {
      referencia: 'Caver, J. (2020). <i>Equipo promotor</i>. Mentorday.',
      link:
        'https://mentorday.es/wikitips/equipo-promotor/#:~:text=El%20equipo%20promotor%20es%20una,a%20cinco%2C%20seguramente%2C%20falle',
    },
    {
      referencia:
        'Cetro virtual de conocimiento para poner fin a la violencia contra las mujeres y niñas. (2010). </i>Qué son los indicadores<i>. ONU Mujeres.',
      link: 'https://www.endvawnow.org/es/articles/336-indicadores.html',
    },
    {
      referencia: 'Chirinos, A. (s.f.). <i>Tipos de divulgación</i>. Tipos.cc.',
      link: 'https://www.tipos.cc/divulgacion/',
    },
    {
      referencia:
        'Cortés, G. (2017). <i>5 claves para planear una estrategia de promotoría en el punto de venta</i>. InformaBTL.',
      link:
        'https://www.informabtl.com/5-claves-planear-una-estrategia-promotoria-en-punto-venta/',
    },
    {
      referencia:
        'Enciclopedia Económica. (2021). </i>Medios de comunicación<i>. Enciclopedia Económica.',
      link: 'https://enciclopediaeconomica.com/medios-de-comunicacion/',
    },
    {
      referencia:
        'ISOTools. (2015). <i>Herramientas para conseguir la mejora continua de la calidad</i>. ISOTools',
      link:
        'https://www.isotools.org/2015/07/17/herramientas-para-conseguir-la-mejora-continua-de-la-calidad/',
    },
    {
      referencia:
        'Kourmentza, E. (2020). <i>Descripción del puesto: promotor de ventas</i>. Workable.',
      link:
        'https://resources.workable.com/es/promotor-de-ventas-descripcion-del-puesto',
    },
    {
      referencia:
        'Novis. (2021). <i>Principal herramienta para la toma de decisiones</i>. Novis.',
      link:
        'https://www.novis.com.mx/blog/gestion-empresarial/tecnologia-principal-herramienta-para-la-toma-de-decisiones-11875/',
    },
    {
      referencia:
        'Startup Guide. (2022). <i>Cómo moderar reuniones de trabajo de una forma eficiente</i>. Startup Guide.',
      link:
        'https://www.ionos.es/startupguide/productividad/como-moderar-reuniones/',
    },
    {
      referencia:
        'Toro, R. (2020). <i>¿Qué son las iniciativas de mejora y cómo se gestionan?</i> Nueva ISO 9001:2015.',
      link:
        'https://www.nueva-iso-9001-2015.com/2020/06/que-son-las-iniciativas-de-mejora-y-como-se-gestionan/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'May Stefanny González Verjel',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Luz Aida Quintero Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Bogotá - Centro de Gestión Industrial',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
