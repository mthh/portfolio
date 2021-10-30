<template>
  <main class="content">
    <h1>Projects</h1>
    <section class="projects-holder">
      <ProjectItem
          v-for="(project, idx) in projects"
          :key="idx"
          :name="project.name"
          :types="project.types"
          :languages="project.languages"
          :description="project.description"
          :images="project.images"
          :links="project.links"
          :duration="project.duration"
          :context="project.context"
          :note="project.note"
          v-on:emit-image="[
              (showImage = true),
              (previewImageUrl = $event.url),
              (previewImageTitle = $event.title)]"
      />
    </section>
    <transition name="image-preview-transition">
      <div
          v-if="showImage"
          class="image-preview-container"
          @click="[(showImage = false), (previewImageUrl = ''), (previewImageTitle = '')]"
      >
        <img
            :src="previewImageUrl"
            :alt="previewImageTitle"
            class="image-preview"
        />
        <h4>{{previewImageTitle}}</h4>
      </div>
    </transition>
  </main>
</template>

<script>
import ProjectItem from '../components/ProjectItem';
import projects from '../assets/projects.json';

export default {
  name: 'Projects',
  components: { ProjectItem },
  data() {
    return {
      projects,
      showImage: false,
      previewImageUrl: '',
      previewImageTitle: '',
    };
  },
};
</script>

<style scoped>
.projects-holder {
  margin: auto;
}
.image-preview {
  max-height: 95%;
  max-width: 95%;
  border-radius: 10px;
}
.image-preview-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 100;
}
.image-preview-container h4 {
  text-align: center;
  color: white;
  font-style: italic;
  margin-top: 1em;
}
@media (max-width: 420px) {
  .image-preview-container h4 {
    font-size: 0.85em;
  }
}
.image-preview-transition-enter-active,
.image-preview-transition-leave-active {
  transition: all 0.3s ease;
}
.image-preview-transition-enter-from,
.image-preview-transition-leave-to {
  opacity: 0;
}
</style>

