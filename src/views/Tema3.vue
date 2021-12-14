<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-0
  
    .px-4.pt-4.px-md-5.pt-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Sistemas de información

      .row.justify-content-center.mb-5
        .col-lg.mb-4.mb-lg-0
          .pe
            .puntos.d-none.d-lg-block
            p Según la Ley 100 de 1993, que establece la protección integral, a partir del Sistema General de Seguridad Social en Salud, se brinda la atención en salud integral a la población en sus fases de educación, información y fomento de la salud y la prevención, diagnóstico, tratamiento y rehabilitación, en cantidad, oportunidad, calidad y eficiencia, de conformidad con lo previsto en el Artículo 162 respecto del Plan Obligatorio de Salud. 
          .cajon.color-acento-contenido.p-4
            p.mb-0 Partiendo de lo mencionado anteriormente, se ve la importancia que tiene el contener y alimentar los sistemas de información que permitan la recolección, procesamiento y reporte de información necesaria para el mejoramiento de los servicios de salud. 
        
        .col-6.col-lg-5
          figure(data-aos="zoom-in-up")
            img(src='@/assets/curso/t3-01.png')
          
      .tarjeta.color-primario--claro.p-4.p-lg-5.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-4.mb-lg-0
            .h5.color-primario En Colombia, el sistema de información se maneja desde el Ministerio de Salud y Protección Social, y se caracteriza por: 
          .col-lg
            .row.justify-content-center.tarjetas-overflow(data-aos="flip-right")
              .col-sm-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100.invert-tarjeta.d-flex.flex-column.justify-content-between
                  div
                    .row.justify-content-center.mb-3
                      .col-6
                        figure
                          img(src='@/assets/curso/t3-02.svg')
                    p.text-center.mb-0.text-small Realizar el seguimiento y evaluación de la gestión de la calidad de la atención en salud en el Sistema Obligatorio de Garantía de Calidad de la Atención en Salud.
                  .row.justify-content-center.mt-2
                    .col-3
                      img.invert-img(src='@/assets/curso/olas-b.svg')

              .col-sm-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100.invert-tarjeta.d-flex.flex-column.justify-content-between
                  div
                    .row.justify-content-center.mb-3
                      .col-6
                        figure
                          img(src='@/assets/curso/t3-03.svg')
                    p.text-center.mb-0.text-small Brindar información a los usuarios para elegir libremente con base en la calidad de los servicios, de manera que puedan tomar decisiones informadas en el momento de ejercer los derechos que para ellos contempla el Sistema General de Seguridad Social en Salud.
                  .row.justify-content-center.mt-2
                    .col-3
                      img.invert-img(src='@/assets/curso/olas-b.svg')
                      
              .col-sm-6.col-lg-4
                .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100.invert-tarjeta.d-flex.flex-column.justify-content-between
                  div
                    .row.justify-content-center.mb-3
                      .col-6
                        figure
                          img(src='@/assets/curso/t3-04.svg')
                    p.text-center.mb-0.text-small Ofrecer insumos para la referenciación por calidad, que permitan materializar los incentivos de prestigio del sistema.
                  .row.justify-content-center.mt-2
                    .col-3
                      img.invert-img(src='@/assets/curso/olas-b.svg')

      .pt-4.d-none.d-lg-block

    .pe-4.pe-lg-5
      .row.align-items-center.mx-0.mb-5
        .col-8.col-lg-4.mb-4.mb-lg-0.ps-0
          figure
            img.pb-2(src='@/assets/curso/t3-05.png')
          
        .col-lg
          .ps-4.ps-lg-0
            p De esta forma, es posible encontrar como sistema de información a SISPRO. A continuación, se estudiará más sobre sus centrales de información: 
            .h5.color-primario.underline Sistema Integrado de Información de la Protección Social – SISPRO
            p.color-primario SISPRO está conformado por bases de datos y sistemas de información del sector sobre oferta y demanda de servicios de salud, calidad de los servicios, aseguramiento, financiamiento, promoción social. Su objetivo es brindar información oportuna, suficiente y estandarizada para la toma de decisiones del Sector Salud y Protección Social, centrada en el ciudadano.
           
            .pe
              .ondas-b.d-none.d-lg-block
              p.mb-0 Este sistema integrado está estructurado por centrales de información que buscan, a través de un servicio digital, atender las necesidades de información de los ciudadanos y grupos de interés.  
      
    .px-4.px-lg-5
      p En los siguientes slider, se pueden ver las centrales de información, según su clasificación, entidades y sistemas de información: 

    .px-4.px-lg-5.pt-4.pt-lg-5.pb-3.mb-5.fondo-gris
      SlyderE(indicadores="centro")
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.color-primario Prestadores de servicios 
            h5.color-secundario Información de la oferta de prestadores en salud.
            ul.lista-ul--color.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Incluye, entre otros, profesionales de salud, instituciones prestadoras de servicios habilitados y variables relevantes para analizar la gestión anual de las Empresa Sociales del Estado, por departamento.
              li.mb-0
                i.lista-ul__vineta
                | REPS - Registro Especial de Prestadores de Servicios de Salud
              li.mb-0
                i.lista-ul__vineta
                | RETHUS - Registro de Talento Humano en Salud
              li.mb-0
                i.lista-ul__vineta
                | SIHO - Sistema de Gestión Hospitalaria
              li.mb-0
                i.lista-ul__vineta
                | MIPRES
              li.mb-0
                i.lista-ul__vineta
                | RUAF - Registro Único de Afiliados
              li.mb-0
                i.lista-ul__vineta
                | Consulta Masiva de Supervivencia
              li.mb-0
                i.lista-ul__vineta
                | Mi Vacuna

          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/t3-06.png')


        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.color-primario Financiamiento
            h5.color-secundario Información sobre recursos de financiamiento para actividades y entidades del sector.
            p Incluye recursos para cofinanciar proyectos de inversión de ESE, giro directo a IPS y de compra de cartera de IPS.
            ul.lista-ul--color.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Indicadores generales del gasto en atenciones en salud
              li.mb-0
                i.lista-ul__vineta
                | Facturación electrónica
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/t3-07.png')


        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.color-primario Salud ambiental
            h5.color-secundario Información de saneamiento básico, indicadores de calidad del agua y el Registro de Estratificación y Coberturas. 
            p También podrá hacer consultas sobre los establecimientos vigilados por INVIMA con respecto a salud nutricional.

            ul.lista-ul--color.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Establecimientos certificados en HACCP
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/t3-08.png')


        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4.color-primario Ciudadano
            h5.color-secundario Información de los ciudadanos en el Sistema de Seguridad Social. 
            p Facilita a los ciudadanos la consulta de sus datos básicos de salud, riesgos laborales, pensiones y subsidios; al profesional de salud, la verificación de su estatus para la prescripción; y la realización de trámites electrónicos de afiliación al Sistema General de Seguridad Social en Salud, de traslados y movilidad entre regímenes, asignación de plazas del Servicio Social Obligatorio-SSO y de otros trámites.

            ul.lista-ul--color.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Trámites y Servicios
              li.mb-0
                i.lista-ul__vineta
                | RUAF - Registro Único de Afiliados
              li.mb-0
                i.lista-ul__vineta
                | PILA - Planilla Integrada de Liquidación de Aportes
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/t3-09.png')

    .px-4.px-lg-5
      p.mb-5 Partiendo de la información anterior, se mencionaron dos de los servicios que se presentan en la central de información al ciudadano. Aquí podemos ver el RUAF y PILA. 

      .pe.mb-4
        .ondas-b.d-none.d-lg-block
        .pe__content
          .h5.color-primario.underline Registro Único de Afiliados – RUAF
          p Es un sistema de información que consolida las afiliaciones que reportan las entidades y administradoras del Sistema de Protección Social, de acuerdo con lo establecido en la norma vigente.

        
    .fondo-olas
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            h5.color-secundario.mb-0 En Colombia, el sistema de información se maneja desde el Ministerio de Salud y Protección Social, y se caracteriza por: 
          .col-lg-9

            SlyderF(columnas="col-md-6 col-xl-4")
              .tarjeta.color-blanco.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4.col-lg-6
                    img(src='@/assets/curso/t3-10.svg')
                p.mb-0.text-center Subsistema de Seguridad Social en Pensiones

              .tarjeta.color-blanco.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4.col-lg-6
                    img(src='@/assets/curso/t3-11.svg')
                p.text-center.mb-0 Subsistema de Seguridad Social en Pensiones - Pensionados

              .tarjeta.color-blanco.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4.col-lg-6
                    img(src='@/assets/curso/t3-12.svg')
                p.text-center.mb-0 Subsistema de Seguridad Social en Cesantías

              .tarjeta.color-blanco.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4.col-lg-6
                    img(src='@/assets/curso/t3-13.svg')
                p.text-center.mb-0 Subsistema de Seguridad Social en Riesgos Laborales

              .tarjeta.color-blanco.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4.col-lg-6
                    img(src='@/assets/curso/t3-14.svg')
                p.text-center.mb-0 Subsistema de Seguridad Social en Compensación Familiar

              .tarjeta.color-blanco.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4.col-lg-6
                    img(src='@/assets/curso/t3-15.svg')
                p.text-center.mb-0 Subsistema de Asistencia Social

      .pe-4.pe-lg-5
        .row.align-items-center.mx-0.mb-5
          .col-8.col-lg-4.mb-4.mb-lg-0.ps-0
            figure
              img.pb-2(src='@/assets/curso/t3-16.png')
            
          .col-lg
            .ps-4.ps-lg-0
              .h5.color-primario.underline Planilla Integrada de Liquidación de Aportes - PILA
              p.color-primario Es un mecanismo virtual por medio del cual los empleadores, personas naturales o jurídicas deben realizar el pago de aportes a seguridad social (salud, pensión, riesgos laborales y fondo de solidaridad pensional) y de las obligaciones parafiscales (caja de compensación familiar, Sena e ICBF) de sus trabajadores. Aquí podemos destacar que es responsabilidad del aportante suministrar la información para la liquidación de aportes al Sistema de Seguridad Social Integral y Parafiscales.
              p A continuación, se mencionan algunos factores que debe tener en cuenta el empleador al momento de realizar los aportes a seguridad social a favor de sus trabajadores: 

      .px-4.px-lg-5
        .row.justify-content-center.mb-5
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check
                | Debe realizar aportes a salud, pensión, riesgos laborales y caja de compensación familiar. 
              li
                i.fas.fa-check
                | Realizar los aportes por medio de la planilla “E” de empleados. 
              li
                i.fas.fa-check
                | El monto por concepto de aportes debe determinarse sobre el IBC del trabajador. 
              li
                i.fas.fa-check
                | Reportar las novedades en la PILA según variaciones en el IBC y de esta forma evitar sanciones. 
              li.mb-0
                i.fas.fa-check
                div 
                  p Las novedades que se pueden reportar en la PILA son de tipo: 
                  ul.lista-ul--color.mb-0.ps-0
                    li
                      i.fas.fa-check
                      p.color-secundario.mb-0
                        b Transitorias: 
                        | una incapacidad o licencia no remunerada. 
                    li.mb-0
                      i.fas.fa-check
                      p.color-secundario.mb-0
                        b Permanentes: 
                        | Traslado de EPS o Fondo de Pensiones. 
          .col-6.col-lg-5(data-aos="zoom-in-up")
            figure
              img(src='@/assets/curso/t3-17.png')
    .fondo-secundario
      .py-4.py-lg-5.px-2
        .text-center.mb-4
          h5.mb-0.text-white Tipos de Planillas 

        SlyderF.slyder-f--b(columnas="col-md-6 col-xl-4")
          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla E - Empleados
            p.mb-0 Se utiliza para el registro y pago de los aportes exclusivamente de empleados de una empresa.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla Y - Independientes en empresas
            p.mb-0 Es utilizada para la liquidación de aportes de cotizantes con contrato de prestación de servicios y pago de valores retenidos por ausencia de pago de los contratistas.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla I - Independientes
            p.mb-0 Aplica para cotizantes independientes o contratistas con uno o más contratos de prestación de servicios.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla A - Cotizantes con novedad de ingreso
            p.mb-0 Aplica para cotizantes con novedad de ingreso en el mes, no incluidos en la planilla principal. Sólo puede liquidarse durante el mes y pagarse con posterioridad a la fecha límite establecida para el aportante.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla M - Mora
            p.mb-0 Es utilizada para el pago de periodos vencidos por ausencia total de pago a uno o varios subsistemas y para el pago de aportes de periodos anteriores a marzo de 2014 en salud.

          .tarjeta.color-secundario--claro.h-100.px-3.pb-3.pt-4
            .row.mb-3
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5 Planilla N - Correcciones
            p.mb-0.lh-md Aplica para el pago de aportes por corrección de IBC, tarifas o días reportados. Reporte novedad de ingreso y pago de aporte a riesgos de independientes (3). Pago de valores retenidos por inexactitud de pago de los contratistas. Reporte de novedades omitidas en la planilla inicial, siempre que se liquide y confirme en el mismo mes (No aplica pago). Pago de retroactivos del sector público. Para corregir inexactitudes en el pago de las liquidaciones o periodos en mora posteriores a marzo de 2014.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla S - Servicio doméstico
            p.mb-0 Es utilizada por aportantes independientes para el pago de aportes de empleados de servicio doméstico.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla T - Empleados beneficiarios del Sistema General de Participaciones
            p.mb-0 Es utilizada para efectuar el pago de los aportes de las empresas beneficiarias del Sistema General de Participación en Salud y Pensión.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla F - Planilla pago faltantes aporte patronal del Sistema General de Participaciones
            p.mb-0 Está concebida tanto para efectuar el pago de aportes faltantes al sistema de salud y pensión, como a las empresas beneficiarias del Sistema General de Participación.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla J - Planilla Sentencias Judiciales
            p.mb-0 Es utilizada para pagos de seguridad social en cumplimiento de una sentencia judicial.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla X - Planilla para el pago de empresas liquidadas
            p.mb-0 Es utilizada para empresas que se encuentran en proceso de liquidación o reestructuración y requieren girar aportes al Sistema General de Seguridad Social Integral y Parafiscales, los cuales no alcanzan a cubrir la totalidad de la tarifa obligatoria.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla U - Planilla de uso UGPP
            p.mb-0 Es utilizada únicamente por la Unidad Especial de Gestión de Pensiones y Parafiscales - UGPP- para efectuar aportes derivados de omisiones, inexactitudes o mora en el pago de uno o varios subsistemas del Sistema General de Seguridad Social Integral y Parafiscales, a nombre de un tercero (aportante deudor)

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla K - Estudiantes
            p.mb-0 Es utilizada para realizar aportes al Sistema General de Riesgos Laborales de todas aquellas personas que se encuentren realizando prácticas profesionales que involucren un riesgo ocupacional, como requisito para obtener un título.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla H - Madres Sustitutas
            p.mb-0 Es utilizada para realizar aportes al Sistema General de Seguridad Social en Salud del tipo de cotizante 4 - Madres Sustitutas - de acuerdo con lo establecido en el Artículo 110 de la Ley 1769 de 2015 o las normas que lo modifiquen o sustituyan. Se debe crear registro como persona natural con tipo de Aportante Independiente.

          .tarjeta.color-secundario--claro.h-100.px-4.pb-4.pt-5
            .row.mb-4
              .col-3
                img(src='@/assets/curso/t3-18.svg')
            h5.mb-4 Planilla O - Obligaciones determinadas por la UGPP
            p.mb-0 Es utilizada únicamente para realizar los aportes por Omisión, Inexactos y Morosos, determinados por la UGPP, para acogerse a los beneficios establecidos en el parágrafo 8 del Artículo 100 y parágrafo 11 del Artículo 101 de la Ley 1943 de 2018.

    .px-4.px-lg-5.py-5.fondo-mitad
      h5.color-primario Tipos de planillas para pensionados
      .row.justify-content-center.mb-5(data-aos="flip-right")
        .col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.h-100.invert-tarjeta.tarjeta-onda-e
            .mb-3.position-relative
              img.invert-img(src='@/assets/curso/olas-b.svg')
              figure
                img(src='@/assets/curso/t3-33.svg')
            h6.color-primario.text-center Planilla Tipo P (pago normal)
            p.mb-0.text-center Este tipo de planilla es considerada como la planilla principal.

        .col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.h-100.invert-tarjeta.tarjeta-onda-e
            .mb-3.position-relative
              img.invert-img(src='@/assets/curso/olas-b.svg')
              figure
                img(src='@/assets/curso/t3-34.svg')
            h6.color-primario.text-center Planilla Tipo R (pagos retroactivos)
            p.mb-0.text-center Este tipo de planilla es utilizado para realizar el pago de retroactivos, resultante de valores no pagados o no cancelados durante el periodo por encontrarse pendiente el reconocimiento y pago de pensión. Podrá no haber obligación de liquidar intereses de mora.

        .col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.h-100.invert-tarjeta.tarjeta-onda-e
            .mb-3.position-relative
              img.invert-img(src='@/assets/curso/olas-b.svg')
              figure.mb-3
                img(src='@/assets/curso/t3-35.svg')
            h6.color-primario.text-center Planilla Tipo L (pago reliquidación)
            p.mb-0.text-center Es utilizada para el pago de mayores aportes al Sistema General de Seguridad Social Integral, resultante de la reliquidación de la mesada pensional. Solo se reportará el valor del ajuste.
      p.mb-0 En relación con lo mencionado anteriormente y con el objetivo de ampliar los conocimientos acerca del tema, puede consultar la normatividad respecto a la PILA en los siguientes artículos: Artículo 33 de la Ley 1438 de 2011, define la capacidad de pago, y Artículo 135 de la Ley 1753 de 2015, define el ingreso base de cotización de los independientes. 

</template>

<script>
import SlyderF from '../components/SlyderF'
export default {
  name: 'Tema3',
  components: { SlyderF },
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
