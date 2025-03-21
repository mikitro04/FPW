<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import { computed, resolveComponent } from 'vue';

    //definizione struttura
    const recensione = defineProps({
        name: String,
        titolo: String,
        scritta: String,
        voto: Number
    })

    //definizione funzione
    const calcolaVoto = computed(() => {
        if(recensione.voto < 0){
            return 0
        }else if(recensione.voto > 10){
            return 10
        }else{
            return recensione.voto
        }
    })

</script>

<template>
    <h4>Recensione di: <b>{{ name }}</b> - {{ titolo }}</h4>
    <p>{{ scritta }}</p>
    <p>Voto: <b>{{ calcolaVoto }}/10</b></p>
    <p>\____________________________________________________________________________________________/</p>
</template>