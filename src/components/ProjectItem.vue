<template>
  <article class="project-item">
    <div class="title-section">
      <h3>{{ name }}</h3>
      <div class="tags">
        <span
            v-for="(type, idx) in types"
            :key="idx"
            class="tag is-info"
        >{{ type }}</span>
        <span
            v-for="(type, idx) in languages"
            :key="idx"
            class="tag is-danger"
        >{{ type }}</span>
      </div>
    </div>
    <div class="subtitle-section">
      <div v-if="duration" class="duration">
        Duration: {{ duration }}
      </div>
      <div v-if="links" class="links">
        <div
            class="link-image-container"
            v-for="(elem, idx) in Object.keys(links)"
            :key="idx"
            v-html="makeImageLink(elem)"
        >
        </div>
      </div>
    </div>
    <div class="description-container" v-if="description || images">
      <div class="description" v-html="formatDescription(description)">
      </div>
      <figure
          class="project image is-220x220"
          v-for="(elem, idx) in images"
          :key="idx"
      >
        <img
            :src="`${elem.url}`"
            :title="elem.title"
            :alt="elem.title"
            @click="$emit('emitImage', { url: elem.url, title: elem.title })"
        />
      </figure>
    </div>
    <div v-if="context" class="context" v-html="formatContext(context)">
    </div>
    <div v-if="note" class="note">
      {{ note }}
    </div>
  </article>
</template>

<script>
import logoGithub from '../assets/logo-github.svg';
import logoRust from '../assets/logo-crates.svg';
import logoNpm from '../assets/logo-npm.svg';
import logoPypi from '../assets/logo-pypi.svg';
import logoWeb from '../assets/logo-web.svg';
import logoPaper from '../assets/logo-paper.svg';

const logos = {
  'crates': `<img title="crates.io" style="width: 30px;" src="${logoRust}"/>`,
  'pypi': `<img title="PyPI" style="width: 30px;" src="${logoPypi}"/>`,
  'github': `<img title="GitHub repository" style="width: 30px;" src="${logoGithub}"/>`,
  'npm': `<img title="NPM" style="width: 30px;" src="${logoNpm}"/>`,
  'web': `<img title="Web page" style="width: 30px;" src="${logoWeb}"/>`,
  'paper': `<img title="Scientific publication" style="width: 30px;" src="${logoPaper}"/>`,
};

export default {
  name: "ProjectItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    types: {
      type: Array,
      required: false,
    },
    languages: {
      type: Array,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: false,
    },
    links: {
      type: Object,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    context: {
      type: String,
      required: false,
    },
    note: {
      type: String,
      required: false,
    }
  },
  emits: {
    emitImage: {
      type: String,
    }
  },
  methods: {
    formatDescription(description) {
      return description.split('\n')
        .map((sentence) => `<p>${sentence}</p>`)
        .join('');
    },
    makeImageLink(elem) {
      return `<a href="${this.links[elem]}">${logos[elem]}</a>`;
    },
    formatContext(context) {
      return `Context: ${context}`;
    }
  },
};
</script>

<style scoped>
.project-item {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  padding: 2em 2em 3em 2em;
  background-color: #ebebeb;
  border-radius: 20px;
  color: #1c1c1c;
  margin: 10px auto;
}
.title-section,
.subtitle-section {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.links {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.tags {
  margin-bottom: unset !important;
}
.duration,
.context,
.note
{
  font-style: italic;
  font-size: 0.9em;
}
.context,
.note
{
  margin-block-start: 1em;
}
.link-image-container {
  margin: 2px;
}
.description-container {
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  align-items: center;
}
.description {
  margin-top: 2px;
  margin-bottom: 2px;
  flex-basis: 70%;
  flex-grow: 1;
  text-align: justify;
}
.description:last-child {
  flex-basis: 100%;
}
.description > p {
  margin-bottom: 0.6em;
}
.project.image {
  margin: 1em 0 1em 1em;
  width: 100%;
  border-radius: 40px;
  cursor: pointer;
  flex-basis: 30%;
}
.image.is-220x220 {
  max-width: 220px;
  max-height: 220px;
}
.project.image > img {
  border: 1px solid #bababa;
  border-radius: 1%;
  padding: 2px;
  background-color: #ffffff;
}

@media (max-width: 700px) {
  .project-item {
    padding: 1em 1em 2em 1em;
    border-radius: 15px;
  }
  .description-container {
    flex-flow: column-reverse;
  }
  .project.image {
    margin: 1em;
  }
}

@media (max-width: 420px) {
  .subtitle-section {
    flex-flow: column-reverse;
  }
}
</style>
