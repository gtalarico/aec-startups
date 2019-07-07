<template>
  <div class="container-fluid sidebar">
    <p class="pills-header">
      <a @click="sidebarOpen = !sidebarOpen">{{
        sidebarOpen ? 'Tags -' : 'Tags +'
      }}</a>
      <span
        class="btn-clear"
        v-show="selectedTags.length > 0"
        @click="doSelectTag(null)"
        ><a href="#">Clear</a></span
      >
    </p>
    <div class="pill-list" :class="{ open: sidebarOpen }">
      <div
        class="pill"
        v-for="(tag, i) in tags"
        :key="i"
        :class="isSelected(tag) ? 'selected' : ''"
        @click="doSelectTag(tag)"
      >
        <a href="#">{{ tag }}</a>
      </div>
    </div>
    <!-- <social-news class="mt-5" /> -->
    <hr />
    <p class="sidebar-link">
      <!-- <img src="@/assets/imgs/twitter.svg" /> -->
      <a href="https://twitter.com/aec_startups">Follow @aec_startups</a>
    </p>
    <p class="sidebar-link">
      <!-- <img src="@/assets/imgs/github.svg" /> -->
      <a href="https://github.com/gtalarico/aec-startups">Contibute</a>
    </p>
  </div>
</template>
<script>
// // import SocialNews from '@/components/SocialNews'

export default {
  components: {
    // 'social-news': SocialNews
  },
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
    return {
      sidebarOpen: true
    }
  },
  computed: {
    tags() {
      return Array.from(
        new Set(
          this.startups
            .map(s => s.tags)
            .reduce((a, b) => [...a, ...b], [])
            .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
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
@import '@/assets/scss/app.scss';

.sidebar {
  font-size: 0.7rem;
}
.sidebar-link {
  margin-bottom: 0.3rem;
  img {
    margin-right: 0.25rem;
    width: 16px;
    opacity: 0.5;
  }
}

.pills-header {
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  .btn-clear {
    margin-left: 1rem;
    font-size: 0.7rem;
  }
}

.pill-list {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in;

  &.open {
    max-height: 650px;
    transition: max-height 0.5s ease-out;
  }
}

.pill {
  cursor: pointer;
  margin: 0.5rem 0rem;
  font-weight: 400;
  text-align: left;
  text-transform: capitalize;
  white-space: nowrap;
  a {
    padding: 0px 1px;
    color: $body-color;
  }
  &.selected a {
    border-bottom: 2px solid #333;
  }
}
</style>
