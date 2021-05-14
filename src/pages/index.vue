<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        <svg width="60" , height="60" viewBox="0 0 20 20">
          <path :d="iconMenuOpen" />
        </svg>
        <span>nuxt-element-project</span>
      </h1>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiMenuOpen } from "@mdi/js";

export default {
  data() {
    return {
      iconMenuOpen: mdiMenuOpen,
    };
  },
};
</script>
