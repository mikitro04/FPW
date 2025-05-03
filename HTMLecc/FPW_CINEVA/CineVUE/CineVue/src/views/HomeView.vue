<script setup>
    import { RouterLink } from 'vue-router';
    import Reviews from '@/components/Reviews.vue'
</script>

<template>

    <article>
        <div>
            <h1>Cineva</h1>
            <h2>Benvenuti su questo sito!</h2>
        
            <p>Su <b><a href="/about">Cineva</a></b> potete scrivere <i>recensioni</i> su <u>film e serie tv</u> 
                e condividere i vostri <b>pensieri</b> con la community!
            </p>
            
            <hr>
            <hr>
        </div>

        <div>
            <h3>Recensioni in evidenza</h3>
            <h4>TizioCheFaLeRecensioni - "Anora" ? No grazie!</h4>
            <p>Boh il film era meh, non mi è piaciuto un momento si 
                snoff, mi sono addormentato alla fine LMAO
                <br/>
                <b>Giudizio:</b> 1/5 - <b>Likes:</b> 1.2k - <b>Dislikes:</b> 392
            </p>
        
            <Reviews name="Dani" titolo="Titolo della recensione" scritta="La recensione del film" voto=6 />
            <Reviews name="miki.tro" titolo="La corazzata potemkin?" scritta="La corazzata potemkin... è una cagata pazzeska!!" voto=-10 />
            <Reviews name="Autore" titolo="Titolo Recensione" scritta="Recensione" voto=5 />
            <Reviews name="Autore" titolo="Titolo Recensione" scritta="Recensione" voto=5 />
            <Reviews name="Autore" titolo="Titolo Recensione" scritta="Recensione" voto=5 />
        
        </div>

        <div class="col-12">
            
            <hr>
            <hr>

            <h4>Classifica attori più apprezzati</h4>
        
            <table>
                <tr>    <!--table raw-->
                    <th></th>
                    <th>Attore</th>
                    <th>Voti</th>
                </tr>
                <tr>
                    <td class="firstElement"><b>1</b></td>
                    <td>Demi Moore</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td class="firstElement"><b>2</b></td>
                    <td>Andew Galfield</td>
                    <td>990</td>
                </tr>
                <tr>
                    <td class="firstElement"><b>3</b></td>
                    <td>Emma Stone</td>
                    <td>700</td>
                </tr>
                <tr>
                    <td class="firstElement leftCorner" rowspan="2"><b>Altri</b></td>
                    <td>Bradley Cooper</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>Lady Gaga</td>
                    <td class="rightCorner">450</td>
                </tr>
            </table>
        </div>
    </article>
</template>

<style>
    table{
        width: 100%;
        margin-bottom: 20px;

        background: transparent;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

        border-collapse: collapse;
    }

    th{
        background-color: var(--primary);
        color: var(--white);

        padding: 10px;
    }

    th:first-child{
        border-top-left-radius: 10px;
    }

    th:last-child{
        border-top-right-radius: 10px;
    }

    td{
        padding: 10px;
        text-align: center;
    }

    td.firstElement{
        background: var(--primary);
        color: var(--white);
    }

    td.leftCorner{
        border-bottom-left-radius: 10px;
    }

    td.rightCorner{
        border-bottom-right-radius: 10px;
    }

    tr:nth-child(even){
        background: var(--tertiary);
    }

    tr:nth-child(odd){
        background: var(--secondary);
    }
        
</style>
