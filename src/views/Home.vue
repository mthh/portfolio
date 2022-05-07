<template>
  <main id="home" class="content">
    <h1 class="title">Matthieu Viry</h1>
    <section>
      <figure class="image is-128x128">
        <img class="" src="../assets/12172162.png"/>
      </figure>
      <h2>About me</h2>
      <div>
        <p>I am currently a research engineer in software engineering at the <a href="https://www.univ-grenoble-alpes.fr/">Université Grenoble Alpes</a>, working in the <a href="https://steamer.imag.fr/">STeamer research team</a> of the <a href="https://www.liglab.fr/">Grenoble Informatics Laboratory</a> (LIG).</p>
        <p>On December 2021, I graduated from the Université Grenoble Alpes with a <a href="https://www.theses.fr/s208233">PhD in Computer Science</a>.
          Before that, from early 2014 to October 2018, I worked as a study engineer in geography and geographic information science.</p>
        <h4>Research interest</h4>
        <ul>
          <li>Semantic Web technologies / Web of Data</li>
          <li>Visualisation of geospatial or statistical data</li>
          <li>Geographic Information Systems</li>
        </ul>
        <h4>Other interest</h4>
        <p>
          I am also interested in software development (library, application) whether it is to process data related to my research interests (geographic information or Semantic Web data for example) or for user interface development in general.
        </p>
        <p>
          I have experience with various languages and frameworks such as JavaScript (vanilla, d3.js, Vue.js, OpenLayers, Leaflet, Itowns), HTML and CSS (Bootstrap, Bulma), Python (FastApi, aiohttp, pandas, matplotlib, PyQt / PySide, Owlready, RDFLib), Cython, Rust (georust ecosystem), Java (Apache Jena) and I may even write C if necessary.
        </p>
      </div>
    </section>

    <section>
      <h2>Contact / Find me</h2>
      <div>
        <p>You can reach me by email, at <span class="is-fake-link">matthieu (dot) viry (at) univ-grenoble-alpes (dot) fr</span>.</p>
        <p>You can find me and see my contributions on <a href="https://github.com/mthh">GitHub</a> and on <a href="https://stackoverflow.com/users/5050917">StackOverflow</a> where I gave more than 130 answers.</p>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
figure > img {
  border: 1px solid #bababa;
  padding: 2px;
  background-color: #ffffff;
}
figure {
  float: right;
}
span.is-fake-link {
  color: #c74894;
}
</style>
