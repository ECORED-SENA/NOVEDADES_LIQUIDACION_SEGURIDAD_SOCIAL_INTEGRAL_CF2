<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span i
      h1 Introducción

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bloque-texto-a.color-secundario.p-4
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          img(src="@/assets/curso/intro-01.svg")
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-0.color-primario Para la elaboración de este componente, se abordaron varios autores conocidos en 
              b liquidación de la seguridad social, 
              | de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de 
              b novedades y liquidación en seguridad social integral.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
