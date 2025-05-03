<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'

  import Navbar from '@/components/Navbar.vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
</script>


<template>
  <!--Apice-->
  <Header></Header>
  <Navbar></Navbar>
  
  <div class="cols">
    <!--Corpo-->
    <RouterView />

    <!--Pedice-->
    <Footer></Footer>
  </div>
  

</template>

<style>
  .cols{
    overflow: hidden;
  }
</style>