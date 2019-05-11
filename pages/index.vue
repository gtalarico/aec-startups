<template>
  <section>
    <Header />
    <Nav
      :startups="startups"
      :selected-tags="selectedTags"
      @tag-selected="tagSelected"
    />
    <Overlay />
    <Grid :startups="filteredStartups" />
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Overlay from '~/components/Overlay.vue'
import Grid from '~/components/Grid.vue'
import Footer from '~/components/Footer.vue'
import DATA from '~/data.yaml'

// import Rellax from 'rellax'

export default {
  components: {
    Header,
    Nav,
    Overlay,
    Grid,
    Footer
  },
  data: function() {
    return {
      startups: DATA.startups,
      selectedTags: []
    }
  },
  computed: {
    filteredStartups() {
      if (this.selectedTags.length === 0) return this.startups
      else
        return this.startups
          .filter(f => f.tags.some(t => this.selectedTags.includes(t)))
          .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
    }
  },
  methods: {
    tagSelected(tag) {
      if (tag === null) {
        this.selectedTags = []
        return
      }
      const index = this.selectedTags.indexOf(tag)
      if (index === -1) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags.splice(index, 1)
      }
    }
  }
}
</script>

<style></style>
