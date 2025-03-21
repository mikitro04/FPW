<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'

  import Navbar from '@/components/Navbar.vue';
  import Header from '@/components/Header.vue';
</script>


<template>
  <!--Apice-->
  <Header></Header>
  <Navbar></Navbar>
  
  <!--Corpo-->
  <RouterView />
  
  <!--Pedice-->

</template>