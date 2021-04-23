<template>
  <div
    class="container-fluid pb-3 d-flex flex-column justify-content-between align-items-baseline"
  >
    <div id="redirect-banner">
      Checkout out our new project at:
      <a href="https://aec.works">
      aec.works
      </a>
    </div>
    <div>
      <h2 class=" logo">
        aec startups
      </h2>
      <p class=" logo-subtitle">
        <em>shiny startups in the aec space</em>
      </p>
    </div>
    <!-- <h1 class="mr-2">
      <a href="https://airtable.com/shrLpxcEdauXQcecZ" target="blank">+</a>
    </h1> -->
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

#redirect-banner {
  background-color: #d1689f;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 0px;
  align-self: center;
  box-shadow: 0 0  12px 0 rgba(0, 0, 0, 0.3);
  a {
    color: white;
    // text-decoration: underline !important;
    font-weight: 600;
    &:hover {
      // text-decoration: underline;
    }
  }
}
</style>
