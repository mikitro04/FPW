<script>
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <!--Lista Item
        ul: lista con puntini
        ol: lista con numeri e.g.: 1. ecc..
    -->
    <nav>
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/contact">Contatti</RouterLink></li>
            <li><RouterLink to="/news">News</RouterLink></li>
            <li><RouterLink to="/who">Chi siamo?</RouterLink></li>
        </ul>
    </nav>
</template>

<style>
    nav li{
        list-style-type: none;

        display: inline-block;
        padding-left: 20px;
        padding-right: 20px;

        margin-top: 10px;
        margin-bottom: 10px;

        border-left: 2px solid var(--black);
    }

    nav li:first-child{
        border-left: none;
    }
</style>
