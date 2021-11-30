<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-0
  
    .px-4.pt-4.px-md-5.pt-md-5
      .titulo-principal.color-acento-contenido.mb-0
        .titulo-principal__numero
          span 1
        h1 Cotización

    .p-5.fondo-gris.mb-4
      .row.justify-content-center(data-aos="zoom-in-up")
        .col-lg-7.mb-4.mb-lg-0
          .pe
            .ondas.d-none.d-lg-block
            p Antes de entrar en más detalle sobre la cotización y liquidación de la seguridad social, es importante definir y conceptualizar algunos términos que permitirán tener un panorama más claro del contexto y su clasificación, según el régimen. 

          .cajon.color-acento-contenido.cajon--e1.p-4
            p.mb-0 Como se mencionó en el primer componente formativo, se vio que el Sistema de Seguridad Social en Colombia es el conjunto de entidades, normas y procedimientos a los cuales pueden tener acceso las personas y la comunidad con el fin principal de garantizar una calidad de vida que esté acorde con la dignidad humana. Para este apartado se verá lo relacionado con el Sistema General de Seguridad Social en Salud – SGSSS. 
        
        .col-6.col-lg
          figure
            img(src='@/assets/curso/t1-01.png')

    .px-4.px-md-5
      h6.text-center.mb-4 El Sistema General de Seguridad Social en Salud – SGSSS está integrado de la siguiente forma:

      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-primario Entidades que integran el Sistema General de Seguridad Social en Salud
      
          figure
            img.pb-2(src='@/assets/curso/t1-02.svg')
            figcaption Fuente: SENA, 2021. 

      .row.justify-content-center.mb-5
        .col-6.col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/t1-03.png')
          
        .col-lg
          .pe
            .puntos.d-none.d-lg-block
            p El objetivo del Sistema General de Seguridad Social en Salud es regular el servicio público esencial de salud y crear condiciones de acceso para toda la población residente del país. Sus funciones van dirigidas a brindar mejores servicios de calidad a la población, que sean incluyentes y equitativos, a través de un modelo de prestación del servicio público en salud que mejore y cree un ambiente sano y saludable. 
          
          p.color-primario Por otra parte, es preciso mencionar que, según el 
            b Artículo 157 de la Ley 100 de 1993, se establece la obligatoriedad para todos los habitantes del territorio nacional de afiliarse al Sistema General de Seguridad Social en Salud (SGSSS). 
            | Es importante resaltar que, para acceder al Sistema General de Seguridad Social en Salud, se puede realizar a través de la afiliación a una EPS del Régimen Contributivo o una EPS del Régimen Subsidiado, esto dependerá de la capacidad económica. Para mayor información, puede consultar el Artículo 236 de la Ley 1955 de 2019 (afiliación de oficio). La siguiente infografía animada presenta los diferentes tipos de regímenes de afiliación al Sistema General de Seguridad Social en Salud:
          
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/f4N9drI26o0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

      p.mb-4 A continuación, vamos a ver la estructura de cotización para el sistema de General de Seguridad Social en Salud: 

      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-primario Estructura de cotización para el Sistema General de Seguridad Social en Salud
      
          figure
            img.pb-2(src='@/assets/curso/t1-04.svg')
            figcaption Fuente: SENA, 2021. 


      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/t1-05.png')
          
        .col-md
          p.color-primario En el gráfico anterior, es posible observar que en el régimen contributivo se encuentran las personas que tienen capacidad de pago y deben realizar los aportes correspondientes a la norma según su vinculación laboral, esta puede ser de forma dependiente o independiente; la primera de ellas hace referencia al personal vinculado con un contrato laboral; la segunda hace referencia a las personas que prestan sus servicios profesionales. 
            b Para realizar los aportes correspondientes, existe un índice de base de cotización para cada uno de los trabajadores, este se denomina Ingreso Base de Cotización – IBC. 
          
      .tarjeta.color-primario--claro.p-5.mb-5
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            .h5.color-primario.underline Ingreso Base de Cotización (IBC)
            p.mb-0 Se considera el monto del salario o ingreso de los trabajadores, tanto dependientes como independientes, que permite determinar los aportes al sistema de seguridad social. Entre estos aportes, se encuentran los de 
              em salud, pensión, riesgos laborales y caja de compensación familiar, 
              | y deben realizarse con los siguientes porcentajes: 
          .col-lg
            .titulo-sexto.color-primario Porcentajes según aportes al Sistema de Seguridad Social
            .row.justify-content-center.tarjetas-overflow(data-aos="flip-right")
              .col-10.col-sm-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100
                  .row.justify-content-center.mb-3
                    .col-7.col-sm-9
                      figure
                        img(src='@/assets/curso/t1-06.svg')
                  h5.text-center Salud
                    br
                    | 12.5%

              .col-10.col-sm-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100
                  .row.justify-content-center.mb-3
                    .col-7.col-sm-9
                      figure
                        img(src='@/assets/curso/t1-07.svg')
                  h5.text-center Riesgos Laborales ARL
                    br
                    | 0.522%

              .col-10.col-sm-6.col-lg-4
                .tarjeta--boton.color-primario.px-4.py-3.shadow.h-100
                  .row.justify-content-center.mb-3
                    .col-7.col-sm-9
                      figure
                        img(src='@/assets/curso/t1-08.svg')
                  h5.text-center Pensión
                    br
                    | 16%
      .pt-4.d-none.d-lg-block
      h6.text-center.mb-4 En lo que respecta a los aportes al Sistema de Seguridad Social, se deben tener en cuenta los siguientes aspectos: 

      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-primario Aportes según trabajador del Régimen Contributivo al Sistema de Seguridad Social
      
          figure
            img.pb-2(src='@/assets/curso/t1-09.svg')
            figcaption Fuente: SENA, 2021.


      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0
          p Como se observa en el gráfico anterior, los aportes a Salud y Pensión deben ser asumidos por el empleado (trabajador) y el empleador, según los porcentajes mencionados. Caso contrario para los trabajadores independientes, quienes deben asumir la totalidad de los aportes. Por otra parte, en relación con los aportes a riesgos laborales, para el caso del trabajador dependiente, deben ser asumidos solo por el empleador; mientras que, en el caso del trabajador independiente, el empleado debe realizar los aportes si su actividad se encuentra en el nivel de riesgo I, II o III; pero si se encuentra en nivel de riesgo IV o V, le corresponde realizar el aporte al empleador o contratante. 

          p.p-color-primario Es importante que al momento de realizar o determinar el Ingreso Base de Cotización (IBC), se tengan en cuenta las siguientes indicaciones: 


          ul.lista-ul--color.ps-4.mb-0
            li.mb-3
              i.fas.fa-check
              | El valor de los aportes al SGSSS debe estar determinado por el IBC.
            li.mb-3
              i.fas.fa-check
              | Para los trabajadores dependientes, el IBC tendrá en cuenta el salario básico más los pagos mensuales adicionales que constituyan el salario. 
            li.mb-3
              i.fas.fa-check
              | En caso de un período de licencia de maternidad o incapacidad, el IBC se debe reportar con el valor de la licencia o incapacidad. 
            li.mb-3
              i.fas.fa-check
              p.mb-0 Para los trabajadores independientes, el IBC corresponderá al 40% del valor mensualizado del contrato. Entre los trabajadores independientes, se encuentran: 
                br
                | Independientes con contrato de prestación de servicios. 
                br 
                | Independientes de cuenta propia y rentistas de capital. Su IBC se aplicará después de descontar las expensas (gastos) necesarias y podrán hacer uso del esquema de presunción de costos. 
            li.mb-0
              i.fas.fa-check
              | Recuerde que un reporte erróneo del IBC puede hacer que la Unidad de Gestión de Pensiones y Parafiscales (UGPP) califique al empleador o independiente como inexacto.  
        
        .col-6.col-lg-4
          figure
            img.pb-2(src='@/assets/curso/t1-10.svg')


    .fondo-olas
      .pt-5.pe-4.pe-lg-5
        .row.align-items-center.mx-0.mb-5
          .col-8.col-lg-4.mb-4.mb-lg-0.ps-0
            figure
              img.pb-2(src='@/assets/curso/t1-11.png')
            
          .col-lg
            .ps-4.ps-lg-0
              .h5.color-primario.underline Ingreso Base de Cotización para trabajadores dependientes
              p.color-primario Para los trabajadores dependientes, se debe tener en cuenta el salario básico más aquellos otros pagos que perciban de manera mensual y constituyan el salario. Para ampliar más esta información, se puede dirigir al 
                b Artículo 127 del Código Sustantivo del Trabajo (CST). 
              p.color-secundario.mb-0 A continuación, se verán algunos 
                b ejemplos prácticos sobre cómo determinar el IBC para trabajadores dependientes: 
          

      .px-4.px-lg-5
        TabsC.color-acento-contenido.mb-5
          .p-4.fondo-gris(titulo="Ejemplo 1")
            .row.align-items-end.justify-content-center
              .col-8.col-lg-4.mb-4.mb-md-0
                figure
                  img.pb-2(src='@/assets/curso/t1-12.png')
              .col-lg
                h4.color-primario Ejemplo 1
                .pe
                  .ondas-b.d-none.d-lg-block
                  p Empleado dependiente que gana más de dos Salarios Mínimos Legales Mensuales Vigentes (SMLMV) y percibe comisión por ventas. 
                p.color-secundario A partir del siguiente supuesto, un trabajador tiene 
                  b un salario básico de $ 2.500.000 
                  | y gana comisiones por ventas mensualmente (estas pueden variar). En el mes que acaba de terminar, este trabajador ganó por concepto de 
                  b comisiones un total de $ 500.000. 
                p.color-secundario Según lo mencionado anteriormente, se tiene que, para realizar el pago de aportes a seguridad social del mes anterior, se debe tomar el valor del salario básico más el valor de la comisión 
                  b ($ 2.500.000 + $ 500.000 = $ 3.000.000). 
                  | Por otra parte, es importante resaltar que, para este caso donde el trabajador cobra comisiones por ventas y estas pueden variar, se deberá tener en cuenta cada mes el valor percibido por este concepto. 

            p En la siguiente tabla, se puede ver cómo se determinan los valores correspondientes a este trabajador: 

            .titulo-sexto.color-primario 
              h5 Tabla 1 
              span Ejemplo de empleado dependiente con un salario básico más comisión por ventas para hallar el IBC
            .tabla-a.color-primario
              table
                caption Fuente: SENA, 2021.
                thead
                  tr
                    th Aporte
                    th Aporte Empleado (Trabajador)
                    th Aporte Empleador
                    th Total
                tbody
                  tr
                    td Salud
                    td $ 3.000.000 * 4% = 
                      b $ 120.000
                    td $ 3.000.000 * 8.5% = 
                      b $ 255.000
                    td 12.5% = 
                      b $ 375.000
                  tr
                    td Pensión
                    td $ 3.000.000 * 4% = 
                      b $ 120.000
                    td $ 3.000.000 * 12% = 
                      b $ 360.000
                    td 16% = 
                      b $ 480.000
                  tr
                    td Riesgos Laborales ARL
                    td No aplica
                    td $ 3.000.000 * 0.522% = 
                      b $ 15.660
                    td 0.522% = 
                      b $ 15.660
                  tr
                    td 
                      b Totales
                    td 
                      b $ 240.0000
                    td 
                      b $ 630.660
                    td 
                      b $ 870.660

          .p-4.fondo-gris(titulo="Ejemplo 2")
            .row.align-items-end.justify-content-center
              .col-8.col-lg-4.mb-4.mb-md-0
                figure
                  img.pb-2(src='@/assets/curso/t1-13.png')
              .col-lg
                h4.color-primario Ejemplo 2
                .pe
                  .ondas-b.d-none.d-lg-block
                  p Empleado dependiente que gana entre uno o menos de dos Salarios Mínimos Legales Mensuales Vigentes (SMLMV) y percibe un adicional por horas extras trabajadas. 
                .tarjeta.color-primario--claro.p-3.mb-3
                  p.color-secundario.mb-0 Aquí es importante recordar que estos trabajadores tienen derecho a un 
                    b auxilio de transporte 
                    | y se tiene en cuenta en el total devengado del trabajador para temas de pago de nómina, pero no para el aporte de Seguridad Social de Salud. 
                p.color-secundario Se parte del siguiente supuesto, un trabajador tiene un 
                  b SMLMV (salario mínimo año 2021) de $ 908.526 
                  | y en el mes anterior realizó trabajos en 
                  b horario extra por un valor de $ 130.000. 
                  | En este caso, para realizar el pago de aportes a seguridad social del mes anterior, se debe tomar el valor del SMLMV más el valor obtenido por las 
                  b horas extras ($ 908.526 + $ 130.000 = $ 1.038.526). 

            p En la siguiente tabla, se puede ver cómo se determinan los valores correspondientes a este trabajador: 

            .titulo-sexto.color-primario 
              h5 Tabla 2
              span Ejemplo de empleado dependiente con un SMLMV más horas extras para hallar el IBC
            .tabla-a.color-primario
              table
                caption Fuente: SENA, 2021.
                thead
                  tr
                    th Aporte
                    th Aporte Empleado (Trabajador)
                    th Aporte Empleador
                    th Total
                tbody
                  tr
                    td Salud
                    td $ 1.038.526 * 4% = 
                      b $ 41.541,04
                    td $ 1.038.526 * 8.5% = 
                      b $ 88.274,71
                    td 12.5% = 
                      b $ 129.815,75
                  tr
                    td Pensión
                    td $ 1.038.526 * 4% = 
                      b $ 41.541,04
                    td $ 1.038.526 * 12% = 
                      b $ 124.623,12
                    td 16% = 
                      b $ 166.164,16
                  tr
                    td Riesgos Laborales ARL
                    td No aplica
                    td $ 1.038.526 * 0.522% = 
                      b $ 5.421
                    td 0.522% = 
                      b $ 5.421
                  tr
                    td 
                      b Totales
                    td 
                      b $ 83.082,08
                    td 
                      b $ 218.319
                    td 
                      b $ 301.401,08

          .p-4.fondo-gris(titulo="Ejemplo 3")
            .row.align-items-end.justify-content-center
              .col-8.col-lg-4.mb-4.mb-md-0
                figure
                  img.pb-2(src='@/assets/curso/t1-14.png')
              .col-lg
                h4.color-primario Ejemplo 3
                p Empleado dependiente en períodos de licencia de maternidad o incapacidad de origen común.
                p.color-secundario Según el Ministerio de Trabajo, durante los periodos de incapacidad o licencia de maternidad, se debe efectuar el pago de los aportes a seguridad social tomando como IBC el valor de la licencia o incapacidad, según sea el caso. Para ampliar información sobre este concepto, puede consultar el Artículo 70 del Decreto 806 de 1998. Por otra parte, el Artículo 227 del CST establece que una incapacidad de origen común 
                  b debe pagarse los primeros noventa (90) días sobre el 66,67 % del salario total. 
                .pe
                  .ondas-b.d-none.d-lg-block
                  p.color-secundario Se parte del siguiente supuesto, un empleado (trabajador) tuvo un periodo de incapacidad de origen común el mes pasado (del día 1 al día 30 del mes), y devenga un 
                    b salario básico de $ 1.800.000. 
                    | Entonces, según lo mencionado anteriormente, para realizar el pago de aportes a seguridad social del mes anterior o mes de incapacidad, se debe tomar el 66,67% del valor del salario devengado 
                    b ($ 1.800.000 * 66,67% = $ 1.200.060).

            p En otras palabras, se puede decir que el empleado o trabajador, durante el periodo de incapacidad, realizará sus aportes sobre el valor del auxilio por incapacidad y no por su salario. 

            p En la siguiente tabla, se puede ver cómo se determinan los valores correspondientes a este trabajador: 
            
            .titulo-sexto.color-primario 
              h5 Tabla 3
              span Ejemplo de empleado dependiente con licencia de maternidad o incapacidad de origen común para hallar el IBC
            .tabla-a.color-primario
              table
                caption Fuente: SENA, 2021.
                thead
                  tr
                    th Aporte
                    th Aporte Empleado (Trabajador)
                    th Aporte Empleador
                    th Total
                tbody
                  tr
                    td Salud
                    td $ 1.200.060 * 4% = $ 48.002,4
                    td $ 1.200.060 * 8.5% = $ 102.005,1
                    td 12.5% = $ 150.007,5

                  tr
                    td Pensión
                    td $ 1.200.060 * 4% = $ 48.002,4
                    td $ 1.200.060 * 12% = $ 144.007,2
                    td 16% = $ 192.009,6
                  tr
                    td Riesgos Laborales ARL
                    td No aplica
                    td No aplica
                    td No aplica
                  tr
                    td 
                      b Totales
                    td 
                      b $ 96.004,8
                    td 
                      b $ 246.012,3
                    td 
                      b $ 342.017,1


      .px-4.px-lg-5
        .pe.mb-4
          .puntos.d-none.d-lg-block
          .pe__content
            .h5.color-primario.underline Ingreso Base de Cotización para trabajadores independientes
            p En relación con los trabajadores independientes, estarán obligados a pagar la seguridad social aquellos que ganen igual o más de un SMLMV. Por otra parte, los trabajadores independientes se pueden clasificar como: 
        
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0

            .row.justify-content-center(data-aos="flip-right")
              .col-10.col-sm-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta--boton.color-secundario.px-3.py-4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure
                        img(src='@/assets/curso/t1-15.svg')
                  h6.text-center.mb-0 Independientes con contrato de prestación de servicios

              .col-10.col-sm-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta--boton.color-secundario.px-3.py-4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure
                        img(src='@/assets/curso/t1-16.svg')
                  h6.text-center.mb-0 Trabajadores por cuenta propia (comerciantes, entre otros) 

              .col-10.col-sm-6.col-lg-4
                .tarjeta--boton.color-secundario.px-3.py-4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure
                        img(src='@/assets/curso/t1-17.svg')
                  h6.text-center.mb-0 Rentistas de capital

          .col-lg-6
            p.color-primario Encontramos que, para los trabajadores independientes, el Ingreso Base de Cotización (IBC) será del 40% del ingreso mensual 
              b (Artículo 244 de la Ley 1955 de 2019), 
              | y si es trabajador por cuenta propia, se restan costos y deducciones de su ingreso. Para ampliar más sobre este tema, puede consultar la Resolución 209 del 12 de febrero del 2020.
            p.mb-0.color-secundario A continuación, se verán algunos 
              b ejemplos prácticos sobre cómo determinar el IBC para trabajadores independientes: 

        TabsC.color-acento-contenido.mb-5
          .p-4.fondo-gris(titulo="Ejemplo 1")
            .row.align-items-end.justify-content-center
              .col-8.col-lg-4.mb-4.mb-md-0
                figure
                  img.pb-2(src='@/assets/curso/t1-18.png')
              .col-lg
                h4.color-primario Ejemplo 1
                p Empleado o trabajador con contrato de prestación de servicios
                p.color-secundario Partamos del siguiente supuesto, un trabajador tiene un contrato de prestación de servicios por seis (6) meses, con el objetivo de realizar asesoría en la elaboración de un proyecto productivo por un 
                  b total de $12.000.000. 
                  | Para su liquidación se debe tener en cuenta el valor por mes percibido según el contrato. Como el contrato es por doce millones y el tiempo del contrato es por seis meses, entonces tenemos que el valor por mes, es: 
                h5.text-center.color-secundario $ 12.000.000 / 6 meses = $ 2.000.000 por mes

                .tarjeta.color-primario--claro.p-3.mb-3
                  .row
                    .col-lg-7
                      p.mb-0 Después de conocer el valor del salario por mes, se pasa a determinar el IBC, que, según dice la norma, debe ser del 40% de sus ingresos, quedando de la siguiente forma:
                    .col-lg.position-relative
                      .separador-vertical.d-none.d-lg-block
                      .d-flex.align-items-center.h-100
                        h5.color-secundario.mb-0 $ 2.000.000 * 40% = $ 800.000

            p Según lo anterior, este trabajador deberá realizar sus aportes mensuales con un IBC de $ 800.000 por este contrato. En la siguiente tabla, se puede ver cómo se determinan los valores correspondientes a este trabajador: 

            .row.justify-content-center
              .col-lg-8
                .titulo-sexto.color-primario 
                  h5 Tabla 4
                  span Ejemplo de trabajador independiente con contrato de prestación de servicios 
                .tabla-a.color-primario
                  table.sm
                    caption Fuente: SENA, 2021.
                    thead
                      tr
                        th Aporte
                        th(colspan="2") Aporte Empleado (Trabajador)
                    tbody
                      tr
                        td Salud
                        td(colspan="2") $ 800.000 * 12,5% = 
                          b $ 100.000
                      tr
                        td Pensión
                        td(colspan="2") $ 800.000 * 16% = 
                          b $ 128.000
                      tr
                        td Riesgos Laborales ARL
                        td(colspan="2") $ 800.000 * 0.522% = 
                          b $ 4.176
                      tr
                        td Caja de Compensación Familiar (Es Opcional) 
                        td(colspan="2") $ 800.000 * 2% = 
                          b $ 16.000
                      tr
                        td 
                          b Totales
                        td(colspan="2") 
                          b $ 248.176


          .p-4.fondo-gris(titulo="Ejemplo 2")
            .row.align-items-end.justify-content-center
              .col-8.col-lg-4.mb-4.mb-md-0
                figure
                  img.pb-2(src='@/assets/curso/t1-19.png')
              .col-lg
                h4.color-primario Ejemplo 2
                p Empleado o trabajador Cuenta Propia o Rentista de Capital.
                p En este ejemplo, es importante tener presente que los trabajadores Cuenta Propia o Rentista de Capital podrán descontar los costos en los que incurrieron en el desarrollo de su actividad o utilizar el esquema de presunción de costos por el mes que van a realizar los aportes.  
               
                .pe
                  .puntos.d-none.d-lg-block
                  p A partir del siguiente supuesto, un trabajador del sector de la construcción recibe un ingreso mensual de $ 40.000.000 (para mirar la clasificación de actividades, puede consultar el código de actividades CIIU). Para efectos de determinar su IBC, este trabajador descontará de sus ingresos el 67,9%: 
                
               
                h5.text-center.color-secundario $ 40.000.000 * 67,9% = $ 27.160.000

                p.text-center.color-secundario Al monto de sus ingresos, se le debe restar esto, así: 
                  b $ 40.000.000 - $ 27.160.000 = $ 12.840.000

                .tarjeta.color-primario--claro.p-3.mb-3
                  .row
                    .col-lg-7
                      p.mb-0 Después de tener la diferencia de su ingreso, según el porcentaje de presunción de costos, se determina el IBC con base en el 40%: 
                    .col-lg.position-relative
                      .separador-vertical.d-none.d-lg-block
                      .d-flex.align-items-center.h-100
                        h5.color-secundario.mb-0 $ 12.840.000 * 40% = $ 5.136.000

            p Según lo anterior, este trabajador deberá realizar sus aportes mensuales con un IBC de $ 5.136.000. Aquí es importante resaltar que, cuando el IBC del trabajador Dependiente o trabajador Independiente supera los cuatro (4) SMLMV, debe realizar el Aporte al Fondo de Solidaridad Pensional. 
            p En la siguiente tabla, se puede ver cómo se determinan los valores correspondientes a este trabajador: 
            .row.justify-content-center
              .col-lg-8
                .titulo-sexto.color-primario 
                  h5 Tabla 5
                  span Ejemplo de trabajador independiente Cuenta Propia o Rentista de Capital.
                .tabla-a.color-primario
                  table.sm
                    caption Fuente: SENA, 2021.
                    thead
                      tr
                        th Aporte
                        th(colspan="2") Aporte Empleado (Trabajador)
                    tbody
                      tr
                        td Salud
                        td(colspan="2") $ 5.136.000 * 12,5% = 
                          b $ 642.000
                      tr
                        td Pensión
                        td(colspan="2") $ 5.136.000 * 16% = 
                          b $ 821.760
                      tr
                        td Riesgos Laborales ARL
                        td(colspan="2") $ 5.136.000 * 0.522% = 
                          b $ 26.809,92
                      tr
                        td Caja de Compensación Familiar (Es Opcional) 
                        td(colspan="2") $ 5.136.000 * 2% = 
                          b $ 102.720
                      tr
                        td Aporte al fondo de solidaridad pensional
                        td(colspan="2") $ 5.136.000 * 1% = 
                          b $ 51.360
                      tr
                        td 
                          b Totales
                        td(colspan="2") 
                          b $ 1.644.649,92
























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
