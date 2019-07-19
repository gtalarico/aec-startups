<template>
  <section>
    <div class="container-fluid">
      <Header />
      <div class="row">
        <div class="col-sm-3 col-md-3 col-lg-3 col-xl-2 pr-0">
          <Nav
            :startups="startups"
            :selected-tags="selectedTags"
            @tag-selected="handleTagClicked"
            @search-input="handleInput"
          />
        </div>
        <div class="col">
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
        </div>
      </div>
    </div>
    <!-- <Overlay /> -->

    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
// // import Overlay from '@/components/Overlay.vue'
import Grid from '@/components/Grid.vue'
import Footer from '@/components/Footer.vue'
import lambdaService from '@/lambdaService'

export default {
  components: {
    Header,
    Nav,
    // Overlay,
    Grid,
    Footer
  },
  data: function() {
    return {
      startups: [],
      selectedTags: [],
      error: null,
      searchQuery: ''
    }
  },
  computed: {
    filteredStartups() {
      const hasTagSelected = this.selectedTags.length > 0
      return this.startups
        .filter(e =>
          !hasTagSelected ? e : e.tags.some(t => this.selectedTags.includes(t))
        )
        .filter(e => this.matchesSearch(e))
        .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
      // }
    }
  },
  created() {
    // Fetch Records
    lambdaService
      .fetchRecords()
      .then(response => {
        this.startups = response.records
          .map(r => r.fields)
          .filter(o => o.review == 'approved')
      })
      .catch(err => {
        this.error = err
      })
  },
  methods: {
    matchesSearch(entry) {
      return entry.title
        .toLowerCase()
        .concat(entry.description)
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase())
    },
    handleInput(query) {
      this.searchQuery = query
    },
    handleTagClicked(tag) {
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
