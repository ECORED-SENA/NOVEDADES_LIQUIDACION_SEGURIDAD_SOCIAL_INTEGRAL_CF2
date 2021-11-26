export default {
  global: {
    componenteFormativo: 'Liquidación de la seguridad social.',
    descripcionCurso:
      'Los contenidos propuestos en este componente de formación permiten identificar y conocer el índice base de cotización para la seguridad social, su medio de pago y su sistema de información. ',
    // imagenBannerPrincipal: require('@/assets/curso/fondo.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo.png'),
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
        titulo: 'Cotización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medio de pago',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Bernal-Acevedo, O., y Forero-Camacho, J. (2011). Sistemas de información en el sector salud en Colombia. Revista Gerencia y Políticas de Salud, 10(21), p. 85-100. ',
    },
    {
      referencia:
        'Carpintero, C. (2014). Implementación de un sistema de información web para la liquidación y manejo de los aportes a seguridad social de los asociados de la empresa ASOTRANC. Universidad Empresa de Colombia.',
    },
    {
      referencia:
        'Delgado, J. y Pabón, A. (2019). Base de cotización para el pago de aportes al sistema de seguridad social de los trabajadores independientes realizada por la unidad de gestión pensional y parafiscales. ',
    },
    {
      referencia:
        'Etala, J. y Pozzo, J. (1966). Derecho de la seguridad social. Ediar.',
    },
    {
      referencia:
        'Ley 100 de 1993. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diciembre 23 de 1993. DO. N° 41148. ',
    },
    {
      referencia:
        'Real Academia Española. (s. f.) Diccionario de la lengua española.',
    },
  ],
  glosario: [
    {
      termino: 'Cotización',
      significado:
        'Retribución de los trabajadores con arreglo a la cual se calcula la cuota que se ha de pagar a la seguridad social.',
    },
    {
      termino: 'Liquidación',
      significado:
        'Acto por el que se cuantifica el tributo que ha de pagar un contribuyente.',
    },
    {
      termino: 'Nómina',
      significado:
        'Haberes que ha de percibir el trabajador que figura en nómina.',
    },
    {
      termino: 'Sistemas de información',
      significado:
        'Recolecta, procesa y reporta información necesaria para el mejoramiento de los servicios de salud.',
    },
  ],
  complementario: [
    {
      texto:
        'Ley 1955 de 2019.  Por el cual se expide el Plan Nacional de Desarrollo 2018-2022. “Pacto por Colombia, Pacto por la Equidad”. Mayo 25 de 1955. DO. N° 50964.',
      tipo: 'Página web',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30036488',
    },
    {
      texto:
        'Decreto 806 de 1998. [Ministerio de Salud Pública]. Por el cual se reglamenta la afiliación al Régimen de Seguridad Social en Salud y la prestación de los beneficios del servicio público esencial de Seguridad Social en Salud y como servicio de interés general, en todo el territorio nacional. Abril 30 de 1998. DO. N° 43291. ',
      tipo: 'Página web',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/decreto_0806_1998.htm',
    },
    {
      texto:
        'Resolución 209 de 2020. [Unidad Administrativa Especial de Gestión Pensional y Contribuciones Parafiscales de la Protección Social – UGPP]. Por la cual se adopta el esquema de presunción de costos para los trabajadores independientes por cuenta propia y los trabajadores independientes con contratos diferentes a prestación de servicios personales, conforme a su actividad económica. Febrero 12 de 2020. ',
      tipo: 'Documento PDF',
      link:
        'https://contadorespublicossantander.com/wp-content/uploads/2020/02/UGPP-Res-209-Feb-12-de-2020-Costos-presuntos-independientes.pdf',
    },
    {
      texto:
        'DIAN. (s. f.). Relación actividades meritorias – Económicas. Gov.co',
      tipo: 'Página web',
      link:
        'https://www.dian.gov.co/impuestos/sociedades/ESAL/Relaci%C3%B3n%20de%20actividades%20meritorias%20y%20actividades%20econ%C3%B3micas/Paginas/default.aspx',
    },
    {
      texto:
        'Serrano, C. y Ruiz, M. (2021). Manual de usuario. Planilla asistida. Jaime Torres C. y CIA.',
      tipo: 'Documento PDF',
      link:
        'https://bogota.gov.co/sites/default/files/tys/2017/11/Manual-Planilla-Asistida.pdf',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
