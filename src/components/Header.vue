<template>
  <div
    class="container-fluid pb-3 d-flex flex-row justify-content-between align-items-baseline"
  >
    <div>
      <h2 class=" logo">
        aec startups
      </h2>
      <p class=" logo-subtitle">
        <em>shiny startups in the aec space</em>
      </p>
    </div>
    <h1 class="mr-2">
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

<style lang="scss" scoped>
@import '@/assets/scss/app.scss';

.header {
  margin-top: 4rem;
  height: 6rem;
}

.logo {
  font-family: ABeeZee;
  font-weight: 700;
  font-size: 2.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.logo-subtitle {
  font-size: 0.8rem;
  margin-top: -0.5rem;
  color: #666;
}
</style>
