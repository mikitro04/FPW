<script>
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
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