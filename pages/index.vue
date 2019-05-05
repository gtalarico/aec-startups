<template>
  <section>
    <Nav :startups="startups" @tag-selected="tagSelected" />
    <Grid :startups="filteredStartups" />
    <Footer />
  </section>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Grid from '~/components/Grid.vue'
import Footer from '~/components/Footer.vue'
import DATA from '~/data.yaml'

export default {
  components: {
    Nav,
    Grid,
    Footer
  },
  data: function() {
    return {
      startups: DATA.startups,
      selectedTag: null
    }
  },
  computed: {
    filteredStartups() {
      if (!this.selectedTag) return this.startups
      else
        return this.startups
          .filter(f => f.tags.includes(this.selectedTag))
          .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
    }
  },
  methods: {
    tagSelected(tag) {
      this.selectedTag = tag
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
