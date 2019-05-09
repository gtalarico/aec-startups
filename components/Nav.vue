<template>
  <div class="container-fluid py-4 text-center">
    <div class="mb-3 mt-3 tags-list">
      <b-badge
        v-for="(tag, i) in tags"
        :key="i"
        href="#"
        :variant="isSelected(tag) ? 'secondary' : 'default text-muted'"
        @click="doSelectTag(tag)"
      >
        {{ tag }}
      </b-badge>
      <b-badge
        v-show="selectedTags.length > 0"
        variant="warning"
        href="#"
        @click="doSelectTag(null)"
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
    },
    selectedTags: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
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
    isSelected(tag) {
      return this.selectedTags.includes(tag)
    },
    doSelectTag(tag) {
      this.$emit('tag-selected', tag)
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
