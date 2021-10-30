<template>
  <nav class="navbar is-warning has-shadow">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navMenu" class="navbar-menu is-warning">
      <div class="navbar-start">
        <router-link to="/portfolio/" class="navbar-item">Home</router-link>
        <router-link to="/portfolio/projects" class="navbar-item">Projects</router-link>
        <router-link to="/portfolio/publications" class="navbar-item">Publications</router-link>
        <router-link to="/portfolio/teachings" class="navbar-item">Teachings</router-link>
        <router-link to="/portfolio/slides" class="navbar-item">Slides</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  "name": 'NavBar'
};

// Following code is from https://bulma.io/documentation/components/navbar/
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
</script>

<style scoped>
#navMenu {
  max-width: calc(1100px - 4em);
  text-align: center;
  margin: auto;
}

.router-link-active {
  font-weight: 600;
}
</style>
