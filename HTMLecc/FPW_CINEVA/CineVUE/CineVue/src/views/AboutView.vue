<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
  <article>
    <div class="col-12">
      <h1>Cos'è Cineva?</h1>
      <a href="/">Torna alla pagina iniziale</a>
    </div>

    <div class="col-3">
      <h2 id="titoloIndice">Indice</h2>
      <ul id="indice">
        <li><a href="#info">Informazioni sul sito</a></li>
        <li><a href="#target">A chi è rivolto il sito</a></li>
        <li><a href="#cost">Quanto costa?</a></li>
      </ul>
    </div>
    
    <div class="col-6">
      <h2 id="info">Informazioni sul sito</h2>
      <p>informazioni generali del sito</p>
      <a href="#titoloIndice">Torna su</a>
      
      <hr>

      <h3 id="target">A chi è rivolto il sito?</h3>
      <p>Descrizione a chi è rivolto il sito</p>
      <a href="#titoloIndice">Torna su</a>

      <hr>

      <h3 id="cost">Quanto costa?</h3>
      <p>Il sito è completamente gratuito</p>
      <a href="#titoloIndice">Torna su</a>
    </div>

    <div class="col-3">
      <p>Pubblicità bloccata,</p>
      <p>togli uBlock Origin</p>
    </div>

  </article>
</template>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

  #titoloIndice{
    background: var(--primary);
    font-weight: bold;
    color: var(--white);
    font-size: 20px;

    padding: 15px 0px 15px 45px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    margin-bottom: 0px;
  }

  #indice{
    list-style-type: none;
    background: var(--secondary);

    margin-top: 0px;
    padding: 0px 30px 20px 30px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  #indice li{
    background: var(--tertiary);

    padding: 10px 0px 0px 15px;
  }

  #indice li>a{
    background: var(--primary);
  }

  #indice li:last-child{
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
</style>
