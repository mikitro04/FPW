<script setup>
    import { RouterLink } from 'vue-router';
    import Reviews from '@/components/Reviews.vue'
</script>

<template>

    <h1>Cineva</h1>
    <h2>Benvenuti su questo sito!</h2>

    <!--Lista Item
        ul: lista con puntini
        ol: lista con numeri e.g.: 1. ecc..
    -->

    <p>Su <b><a href="/about">Cineva</a></b> potete scrivere <i>recensioni</i> su <u>film e serie tv</u> 
        e condividere i vostri <b>pensieri</b> con la community!
    </p>
    
    <hr>
    <hr>

    <h3>Recensioni in evidenza</h3>
    <h4>TizioCheFaLeRecensioni - "Anora" ? No grazie!</h4>
    <p>Boh il film era meh, non mi è piaciuto un momento si 
        snoff, mi sono addormentato alla fine LMAO
        <br/>
        <b>Giudizio:</b> 1/5 - <b>Likes:</b> 1.2k - <b>Dislikes:</b> 392
    </p>

    <Reviews name="Dani" titolo="Titolo della recensione" scritta="La recensione del film" voto=6 />
    <Reviews name="miki.tro" titolo="La corazzata potemkin?" scritta="La corazzata potemkin... è una cagata pazzeska!!" voto=-10 />

</template>
