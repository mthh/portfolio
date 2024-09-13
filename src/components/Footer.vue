<template>
  <footer class="content">
    <p>© 2021-2024 Matthieu Viry. Last updated on {{ getBuildDate() }}. Built with <a href="https://v3.vuejs.org/">Vue.js</a> and <a href="https://bulma.io/">Bulma</a> (<a href="https://github.com/mthh/portfolio">source</a>).</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer', // eslint-disable-line vue/no-reserved-component-names
  methods: {
    getBuildDate() {
      return document.documentElement.dataset.buildTimestampUtc.split('T')[0];
    },
  },
};
</script>

<style scoped>
footer {
  padding: 0.3em;
  border: 1px solid gray;
  background-color: #f7edd2;
  max-width: calc(1100px - 4em);
  margin: 12px auto 0 auto;
}
p {
  margin-block-start: 0.7em;
  margin-block-end: 0.7em;
  text-align: center;
}
</style>
