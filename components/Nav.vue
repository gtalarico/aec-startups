<template>
  <div class="container-fluid py-4 text-center">
    <!-- <div class="bar"></div> -->
    <h2 class="text-center">
      Aec Startups
    </h2>
    <p class="lead text-secondary">
      ✨ A Collection of Shiny Startups in the AEC Space ✨
    </p>

    <div class="mb-3 mt-3 tags-list">
      <b-badge
        v-for="(tag, i) in tags"
        :key="i"
        href="#"
        :variant="selectedTag === tag ? 'primary' : 'default'"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </b-badge>
      <b-badge
        v-show="selectedTag !== null"
        variant="danger"
        href="#"
        @click="clearSelectedTag()"
      >
        Clear Filter
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
          this.startups
            .map(s => s.tags)
            .reduce((a, b) => [...a, ...b], [])
            .sort()
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
    },
    clearSelectedTag() {
      this.selectedTag = null
      this.$emit('tag-selected', null)
    }
  }
}
</script>

<style lang="scss">
.badge {
  margin: 0 0.35rem;
  font-weight: 400;
  text-transform: capitalize;
}

.tags-list {
  padding: 0 3rem;
}
</style>
