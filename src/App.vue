<template>
  <Navigation/>
  <router-view>
  </router-view>
</template>
<script>
import NotificationsPage from "@/pages/NotificationsPage";
import Navigation from "@/components/Navigation";
export default {
  components: {
    NotificationsPage,
    Navigation,
  }

}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}
input {
  border: 2px solid #000;
  width: 100%;
  padding: 10px 20px;
  outline: none;
}
label {
  font-size: 20px;
  margin-right: auto;
}
</style>
