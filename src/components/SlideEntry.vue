<template>
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
  name: "SlideEntry",
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
      required: false,
    },
    note: {
      type: String,
      required: false,
    },
    conference: {
      type: String,
      required: false,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    place: {
      type: String,
      required: false,
    }
  }
}
</script>

