<template>
  <header>
    <NavBar></NavBar>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="component-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Footer, // eslint-disable-line vue/no-reserved-component-names
    NavBar,
  }
};
</script>

<style>
html {
  overflow-y: auto !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app > main.content {
  padding: 60px 2em 5px 2em;
  max-width: 1100px;
  margin: auto;
}
main section {
  margin: 2em auto;
}
.content {
  margin: 12px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
