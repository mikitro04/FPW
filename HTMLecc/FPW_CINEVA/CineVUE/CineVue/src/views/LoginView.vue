<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="loginContent">
        <div id="loginForm">
            <img src="../assets/img/logo.png" alt="Logo" width="300">

            <h1>Login</h1>

            <form action="login" method="POST">
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" placeholder="Username">
                
                <br>

                <label for="password">Password: </label>
                <input type="password" name="password" id="password" placeholder="Password">
                
                <br>

                <input type="submit" value="Login">
            </form>
        </div>
    </div>
</template>

<style>
    #loginContent{
        height: 600px;
        width: auto;
    }

    #loginForm{
        text-align: center;
        background: var(--primary);
        color: var(--white);

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        padding: 20px;
        margin: 0px;
        border-radius: 10px;    
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5)
    }

    #loginForm>h1{
        color: var(--white);
    }

    #loginForm input{
        display: block;

        width: 66%;
        margin-left: 16%;
        margin-top: 2%;
    }

    #loginForm input[type = "submit"]{
        background-color: var(--white);
        color: var(--primary);
        font-weight: bold;
        cursor: pointer;

        padding: 10px;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
    }

    #loginForm input[type="submit"]:hover{
        background: var(--tertiary);
        color: var(--white);
    }

    #loginForm label{
        font-weight: bold;
    }
</style>

<!--<br>

<label for="data">Data: </label>
<input type="date" id="data" name="data">

<br>

<label for="radio">Radio: </label>
<input type="radio" name="radio" id="radio">

<br>

<label for="selezione">Selezione: </label>
<select name="selezione" id="selezione">

</select>

<br>-->