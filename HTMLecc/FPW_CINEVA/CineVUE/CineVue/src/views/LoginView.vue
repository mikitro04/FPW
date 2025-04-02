<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <h1>Cineva - Login</h1>

    <form action="login" method="POST">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Username">

        <br>

        <label for="data">Data: </label>
        <input type="date" id="data" name="data">

        <br>

        <label for="radio">Radio: </label>
        <input type="radio" name="radio" id="radio">

        <br>

        <label for="selezione">Selezione: </label>
        <select name="selezione" id="selezione">

        </select>

        <br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password">

        <br>
        <br>
        
        <button type="submit" value="Login">Login</button>
    </form>
</template>

<style>

</style>