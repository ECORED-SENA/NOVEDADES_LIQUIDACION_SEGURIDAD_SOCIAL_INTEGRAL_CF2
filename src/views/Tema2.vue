<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-0
  
    .px-4.pt-4.px-md-5.pt-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Medio de pago

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.col-xl.mb-4.mb-xl-0
          .cajon.color-acento-contenido.p-4
            p.mb-0 Como se evidenció en el primer apartado de este componente formativo, en el régimen contributivo se encuentran los trabajadores dependientes y los trabajadores independientes. Aquí, en este apartado referente al medio de pago que deben utilizar tanto los empleadores, que son los encargados de hacer los aportes al sistema general de seguridad social, y los trabajadores independientes, que son los encargados directamente de realizar los pagos, en los dos casos deben realizar los pagos de los aportes mediante la planilla integrada de liquidación de aportes –Pila.  

        .col-8.col-lg-6.col-xl.mb-4.mb-xl-0
          figure
            img(src='@/assets/curso/t2-01.png')

        .col-lg-6.col-xl
          .row.mb-2.d-none.d-xl-block
            .col-2
              figure
                img(src='@/assets/curso/ondas.svg')
          p.mb-0 Antes de entrar en más detalle sobre los sistemas de información y tipos de Pila, se verá la forma de calcular y liquidar la nómina según las novedades de la norma vigente. Entre estas, se encuentra que, a partir de septiembre del 2018, el pago de aportes al Sistema de Seguridad Social Integral y Parafiscales debe efectuarse de manera vencida. Esto quiere decir que el aporte del mes de octubre se debe pagar en el mes de noviembre. Esto se realizará en los plazos establecidos de acuerdo con los últimos dos dígitos del documento de identidad.  

      .bloque-texto-a.color-secundario.p-4.mb-5
        .row.m-0.align-items-center.justify-content-around
          .col-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/t2-02.svg")
          .col-lg-9
            .bloque-texto-a__texto.p-4
              p.mb-0.color-primario En consecuencia, para el mes de octubre, según el ejemplo, las EPS y ARL deberán prestar los servicios sin importar que los aportes se realicen el mes siguiente. En caso de ser contratista, se deberán seguir pagando los aportes y las entidades contratantes tendrán que retener los aportes y pagarlos al sistema. Para mayor información sobre el tema, consulte el Decreto 1273 de 2018. Ahora se verán los diferentes tipos de aporte, según la naturaleza de la contratación:

    .fondo-olas
      .px-4.px-md-5
        .d-none.d-md-block
          .row.justify-content-center.position-relative.mb-5
            .fondo-tarjetas-flip
              img(src="@/assets/curso/fondo-tarjetas-flip.svg")
            .col-md-6.col-xl-4.mb-4.mb-xl-0
              .tarjeta.tarjeta-flip.color-blanco(@mouseover="indicadorTarjetaFlip = false")
                .indicador--hover(v-if="indicadorTarjetaFlip")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t2-03.jpg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    h3 Trabajadores Independientes
                    p.mb-0 Aquí los trabajadores deberán realizar sus aportes mes vencido, como lo dice la norma, y deberán entregar al empleador copia de su PILA, un informe de actividades, según el caso, y la cuenta de cobro, para que el contratante efectúe o realice el pago correspondiente a sus servicios prestados.  

            .col-md-6.col-xl-4.mb-4.mb-xl-0
              .tarjeta.tarjeta-flip.color-blanco(@mouseover="indicadorTarjetaFlip = false")
                .tarjeta-flip__contenedor
                  .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t2-04.jpg')})`}")
                  .tarjeta-flip__contenido.p-4.p-xl-5
                    h3 Trabajadores Dependientes 
                    p.mb-0 En cuanto a los dependientes, el empleador será el encargado de realizar el pago de los aportes de los trabajadores ante la PILA, para esto el empleador deberá liquidar la seguridad social de acuerdo con la normatividad. En este caso, como lo se vio anteriormente, el IBC se aplicará al salario básico más los pagos mensuales adicionales que constituyan el salario. 

        .d-md-none
          .row.justify-content-center.tarjetas-especiales.mb-5
            .col-11.mb-4
              .tarjeta.tarjeta-oh
                img(src="@/assets/curso/t2-03.jpg")
            .col-11
              .tarjeta.color-blanco.shadow.p-4.p-xl-5
                h3 Trabajadores Independientes
                p.mb-0 Aquí los trabajadores deberán realizar sus aportes mes vencido, como lo dice la norma, y deberán entregar al empleador copia de su PILA, un informe de actividades, según el caso, y la cuenta de cobro, para que el contratante efectúe o realice el pago correspondiente a sus servicios prestados.  

          .row.justify-content-center.tarjetas-especiales.mb-5
            .col-11.mb-4
              .tarjeta.tarjeta-oh
                img(src="@/assets/curso/t2-04.jpg")
            .col-11
              .tarjeta.color-blanco.shadow.p-4.p-xl-5
                h3 Trabajadores Dependientes 
                p.mb-0 En cuanto a los dependientes, el empleador será el encargado de realizar el pago de los aportes de los trabajadores ante la PILA, para esto el empleador deberá liquidar la seguridad social de acuerdo con la normatividad. En este caso, como lo se vio anteriormente, el IBC se aplicará al salario básico más los pagos mensuales adicionales que constituyan el salario. 

        p.mb-5 A continuación, se estudiará cómo calcular nómina y liquidación del Sistema de Seguridad Social según los adicionales establecidos en la norma. Antes de entrar en más detalle, es importante conceptualizar algunos términos para tener más claridad sobre el tema; entre estos, se tienen:  

        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Nómina" :icono="require('@/assets/curso/t2-08.svg')")
            .row.align-items-center.justify-content-center
              .col-8.col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/t2-05.png')

              .col-md
                h4.color-primario Nómina
                p Se conoce como los pagos mensuales o quincenales que el empleador o empresa debe realizar a los trabajadores que tiene vinculados mediante contrato de trabajo; entre estos pagos, se encuentran el salario básico y el pago de otros adicionales devengados. 



          .py-4.py-md-5(titulo="Devengado" :icono="require('@/assets/curso/t2-09.svg')")
            .row.align-items-center.justify-content-center
              .col-md.mb-4.mb-md-0
                h4.color-primario Devengado
                p Se conoce como lo que un empleado gana en un mes o periodo a liquidar. Aquí se pueden encontrar pagos relacionados con: 
                ul.lista-ul--color.ps-4.mb-0
                  li
                    i.fas.fa-check
                    | Salario básico 
                  li
                    i.fas.fa-check
                    | Comisiones
                  li
                    i.fas.fa-check
                    | Horas extras 
                  li
                    i.fas.fa-check
                    | Recargos nocturnos
                  li
                    i.fas.fa-check
                    | Recargos dominicales y festivos 
                  li
                    i.fas.fa-check
                    | Auxilio de transporte 
                  li.mb-0
                    i.fas.fa-check
                    | Viáticos 

              .col-8.col-md-4
                figure
                  img(src='@/assets/curso/t2-06.png')



          .py-4.py-md-5(titulo="Deducciones" :icono="require('@/assets/curso/t2-10.svg')")
            .row.align-items-center.justify-content-center
              .col-8.col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/t2-07.png')

              .col-md
                h4.color-primario Deducciones
                p Son los conceptos que el trabajador o empleado adeuda o que debe pagar, y estos son descontados por el empleador del total devengado del trabajador. Algunos de los conceptos que se le descuentan al trabajador son: 
                ul.lista-ul--color.ps-4.mb-0
                  li
                    i.fas.fa-check
                    | Aporte de Seguridad Social por el trabajador (4% de Salud y 4% de pensión) 
                  li
                    i.fas.fa-check
                    | Fondo de Solidaridad Pensional 
                  li
                    i.fas.fa-check
                    | Retención en la fuente 
                  li
                    i.fas.fa-check
                    | Libranzas
                  li
                    i.fas.fa-check
                    | Embargos judiciales 
                  li
                    i.fas.fa-check
                    | Cuota sindical 
                  li.mb-0
                    i.fas.fa-check
                    | Créditos o deudas con el empleador 

          .py-4.py-md-5(titulo="Provisiones o apropiaciones" :icono="require('@/assets/curso/t2-11.svg')")
            .row.align-items-center.justify-content-center
              .col-xl-5.mb-4.mb-xl-0
                h4.color-primario Provisiones o apropiaciones
                p el empleador debe asumir ciertas prestaciones sociales, aportes parafiscales y de seguridad social, además del salario, horas extras, recargos, etc.  En el siguiente esquema, se pueden ver algunos de ellos: 

              .col-xl
                .titulo-sexto.color-primario Provisiones o apropiaciones que debe asumir el empleador ante contrato laboral

                .row.justify-content-center
                  .col-sm-6.col-lg.mb-4.mb-lg-0
                    .tarjeta.color-secundario.p-3.h-100
                      h5.text-center Prestaciones<br>Sociales
                      .tarjeta.color-primario.px-3.py-2.text-center.mb-2 Prima de servicios 8.33%
                      .tarjeta.color-primario.px-3.py-2.text-center.mb-2 Cesantías 8.33%
                      .tarjeta.color-primario.px-3.py-2.text-center.mb-2 Intereses sobre cesantías - 12%
                      .tarjeta.color-primario.px-3.py-2.text-center Vacaciones 4.17% 

                  .col-sm-6.col-lg.mb-4.mb-lg-0
                    .tarjeta.color-secundario.p-3.h-100
                      h5.text-center Sistema de<br>Seguridad Social
                      .tarjeta.color-primario.px-3.py-2.text-center.mb-2 Aporte a Salud 8.5%
                      .tarjeta.color-primario.px-3.py-2.text-center.mb-2 Aporte a Pensión 12.5%
                      .tarjeta.color-primario.px-3.py-2.text-center Riesgos Laborales ARL El % depende del Nivel de Riesgo
                  .col-sm-6.col-lg
                    .tarjeta.color-secundario.p-3.h-100
                      h5.text-center Aportes<br>Parafiscales
                      .tarjeta.color-primario.px-3.py-2.text-center.mb-2.text-small Servicio Nacional de Aprendizaje - SENA2%
                      .tarjeta.color-primario.px-3.py-2.text-center.mb-2.text-small Instituto Colombiano del Bienestar Familiar - ICBF 3%
                      .tarjeta.color-primario.px-3.py-2.text-center.text-small Cajas de Compensación Familiar - CCF 4%

        .pe.mb-4
          .ondas-b.d-none.d-lg-block
          .pe__content
            .h5.color-primario.underline Liquidación de nómina
            p A continuación, se verán algunos ejemplos prácticos sobre cómo liquidar la nómina para trabajadores dependientes: 
        
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        .pe.mb-4
          .ondas-b.d-none.d-lg-block
          .pe__content
            .h5.color-primario.underline Liquidación de prestaciones sociales
            p A continuación, para este ejercicio, se tendrá en cuenta el Ejemplo 1 de liquidación de nómina. Estos son los conceptos que hacen parte de las prestaciones sociales: 

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        .pe.mb-4
          .ondas-b.d-none.d-lg-block
          .pe__content
            .h5.color-primario.underline Liquidación de aportes parafiscales
            p Los aportes parafiscales también se deben liquidar, aunque algunas empresas no están obligadas a pagarlos todos. Observe el siguiente ejemplo.

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
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
