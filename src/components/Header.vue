<template>
  <div class="container header">
    <h2 class="text-center logo">
      Aec Startups
    </h2>
    <p class="text-center lead text-secondary logo-subtitle">
      Shiny Startups in the AEC Space
    </p>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      selectedTag: null
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

.header {
  margin-top: 4rem;
  height: 6rem;
}

.logo {
  font-family: ABeeZee;
  font-weight: 700;
  font-size: 2.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.logo-subtitle {
  font-size: 0.9rem;
  font-weight: 400;
  color: $primary;
}
</style>
