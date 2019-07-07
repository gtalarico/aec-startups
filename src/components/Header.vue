<template>
  <div
    class="container-fluid pb-3 d-flex flex-row justify-content-between align-items-baseline"
  >
    <div>
      <h2 class=" logo">
        Aec Startups
      </h2>
      <p class=" logo-subtitle">
        Shiny Startups in the AEC Space
      </p>
    </div>
    <h1 class="mr-3">
      <a href="https://airtable.com/shrLpxcEdauXQcecZ" target="blank">+</a>
    </h1>
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
  margin-top: -0.5rem;
}
</style>
