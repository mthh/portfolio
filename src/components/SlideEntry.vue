<template>
  <h4 style="margin-bottom: 0; margin-top: 1em;" v-if="first">
    {{ date.match(/[0-9]{4}$/)[0] }}
  </h4>
  <hr style="margin: 0 0 0.5em 0" v-if="first" />
  <li>
    <strong><a :href="url">{{ title }}</a></strong>
    <span v-if="note"> ({{ note }})</span>
    <br>
    <span v-if="conference"><em>{{ conference }} - </em></span>
    <span v-if="place">{{ place }} - {{ date }}</span>
    <span v-else>{{ date }}</span>
  </li>
</template>

<script>
/**
 * The idea is to enhance this component in near future
 * (for example to display a thumbnail of each entry)
 */
export default {
  name: 'SlideEntry',
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: false,
      default: () => null,
    },
    conference: {
      type: String,
      required: false,
      default: () => null,
    },
    // thumbnail: {
    //   type: String,
    //   required: false,
    // },
    place: {
      type: String,
      required: false,
      default: () => null,
    },
    first: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
