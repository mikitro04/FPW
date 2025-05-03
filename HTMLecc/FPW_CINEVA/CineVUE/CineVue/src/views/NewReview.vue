<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>

    <div id="reviewContent">
        <div id="reviewForm">
            <img src="../assets/img/logo.png" alt="Logo" width="300">

            <h1>Nuova recensione</h1>

            <form action="publish" method="POST">
                
                <div>
                    <label for="title">Titolo: </label>
                    <input type="text" name="title" id="title" placeholder="Inserisci il titolo">
                </div>

                <div>
                    <label for="descriprion">Descrizione:<br></label>
                    <textarea name="descriprion" id="descriprion" placeholder="Inserisci la descrizione"></textarea>
                </div>

                <div class="radio-group">
                    <label for="type">Tipo: </label>
                    <input type="radio" name="type" id="type" value="film">Film
                    <input type="radio" name="type" id="type" value="serie">Serie Tv
                </div>

                <div>
                    <label for="stars">Voto su 5: </label>
                    <select name="stars" id="stars">
                        <option value="" disabled selected>Inserisci il voto:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                
                <input type="submit" name="pubblica" id="pubblica" value="Pubblica">
            </form>
        </div>
    </div>


</template>

<style>
    #reviewContent {
        height: 600px;
        width: auto;
    }

    #reviewForm {
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

    #reviewForm>h1{
        color: var(--white);
    }

    #reviewForm input{
        display: block;

        width: 66%;
        margin-left: 16%;
        margin-top: 2%;
    }

    #reviewForm input[type = "submit"]{
        background-color: var(--white);
        color: var(--primary);
        font-weight: bold;
        cursor: pointer;

        padding: 10px;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
    }

    #reviewForm input[type="submit"]:hover{
        background: var(--tertiary);
        color: var(--white);
    }
    
    #reviewForm input[type="radio"] {
        margin: 10px;
        margin-left: 20px;
        margin-right: 10px;
        
        width: 20px;
    }

    #reviewForm label{
        font-weight: bold;
    }
    
    .radio-group {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2%;
        padding: 0%;
    }
    
</style>
