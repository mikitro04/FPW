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
            <li><RouterLink to="/newReview">New Review</RouterLink></li>
            <li><RouterLink to="/login">Login</RouterLink></li>
        </ul>
    </nav>
</template>
