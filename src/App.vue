<template>
  <section>
    <Header />
    <Nav
      :startups="startups"
      :selected-tags="selectedTags"
      @tag-selected="tagSelected"
    />
    <Overlay />
    <Grid v-if="startups.length > 0" :startups="filteredStartups" />
    <div
      v-if="startups.lenght === 0 && !error"
      class="d-flex justify-content-center"
    >
      <div
        class="spinner-grow text-primary"
        role="status"
        style="width: 4rem; height: 4rem;"
      ></div>
    </div>

    <div v-if="error" class="d-flex justify-content-center">
      <p class="justify-content-center text-danger">{{ error }}</p>
    </div>

    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Overlay from '@/components/Overlay.vue'
import Grid from '@/components/Grid.vue'
import Footer from '@/components/Footer.vue'
import dataService from '@/dataService'

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
      startups: [],
      selectedTags: [],
      error: null
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
  created() {
    dataService
      .fetchRecords()
      .then(response => {
        this.startups = response.records
          .map(r => r.fields)
          .filter(o => o.approved)
      })
      .catch(err => {
        this.error = err
      })
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
