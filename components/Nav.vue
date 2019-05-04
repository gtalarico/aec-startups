<template>
  <div class="container-fluid py-4 text-center">
    <h1 class="text-center">
      AEC Startups
    </h1>
    <p class="lead text-secondary">A collection of shiny AEC Startups</p>

    <div>
      <b-badge
        v-for="(tag, i) in tags"
        :key="i"
        href="#"
        :variant="selectedTag === tag ? 'primary' : 'default'"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </b-badge>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    startups: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedTag: null
    }
  },
  computed: {
    tags() {
      return Array.from(
        new Set(
          this.startups.map(s => s.tags).reduce((a, b) => [...a, ...b], [])
        )
      )
    }
  },
  methods: {
    selectTag(tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = null
      } else {
        this.selectedTag = tag
      }
      this.$emit('tag-selected', this.selectedTag)
    }
  }
}
</script>

<style lang="scss">
.badge {
  margin: 0 0.25rem;
}
</style>
