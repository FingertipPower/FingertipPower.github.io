<template>
  <div id="app">
    <tj-header></tj-header>
    <tj-navigation></tj-navigation>
    <router-view class="ro"></router-view>
  </div>
</template>

<script>
import  tjHeader from './components/header'
import  tjNavigation from './components/navigation'
export default {
  name: 'app',
  components:{
    tjHeader,
    tjNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.ro{
  margin-top: 60px;
  width: 80%;
  height: 87%;
  margin-left: 22%;
}
</style>
