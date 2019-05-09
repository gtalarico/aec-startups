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
@import '~/assets/scss/app.scss';

.header {
  border-bottom: 1px solid #ddd;
  height: 6rem;
  // margin-right: 3rem;
  // margin-left: 3rem;
  // background-color: #f9f9f9;
  // width: 100%;
}

.logo {
  font-family: ABeeZee;
  font-size: 2.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}

.logo-subtitle {
  font-size: 0.9rem;
  font-weight: 400;
  color: $primary;
}
</style>
