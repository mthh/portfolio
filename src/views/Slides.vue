<template>
  <main id="slides" class="content">
    <h1>Presentation slides</h1>
    <section>
      <p>
        I have given various presentations over the last few years,
        whether it was to present research results or to present technologies that I work with.
        For the record, my slides are usually available here
        (most of them are in French,
        some are in PDF and others use web frameworks such as Reveal.js).
      </p>
      <ul>
        <SlideEntry
          v-for="(slide, idx) in slides"
          :key="idx"
          :title="slide.title"
          :url="slide.url"
          :note="slide.note"
          :conference="slide.conference"
          :place="slide.place"
          :date="slide.date"
          :first="slide.first"
        />
      </ul>
    </section>
  </main>
</template>

<script>
import SlideEntry from '../components/SlideEntry.vue';
import slides from '../assets/slides.json';

export default {
  name: 'Slides',
  components: { SlideEntry },
  data() {
    // We want to know if this is the first entry of the year
    const seen = {};
    slides.forEach((s) => {
      const year = s.date.match(/[0-9]{4}$/)[0];
      if (seen[year]) {
        // eslint-disable-next-line no-param-reassign
        s.first = false;
      } else {
        // eslint-disable-next-line no-param-reassign
        s.first = true;
        seen[year] = true;
      }
    });
    return { slides };
  },
};
</script>

<style scoped>
li + li {
  margin-top: 0.5em;
}
</style>
