<template>
  <main
    id="grid"
    class="d-flex flex-wrap justify-content-md-center justify-content-center"
  >
    <card
      v-for="(entry, i) in startups"
      :key="i"
      v-bind="entry"
      :card-id="idFromTitle(entry.title)"
      @click="$router.push({ path: `#${idFromTitle(entry.title)}` })"
    />
  </main>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    Card
  },
  props: {
    startups: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {}
  },
  computed: {},
  watch: {
    startups() {
      this.$nextTick(() => {
        // this.setupGrid()
      })
    }
  },
  mounted() {
    this.setupGrid()
  },
  methods: {
    setupGrid() {
      if (this.$route.hash) {
        this.$nextTick(() => {
          setTimeout(() => {
            const y = this.getYposition(this.$route)
            window.scrollTo(0, y)
          }, 500)
        })
      }
    },
    idFromTitle(title) {
      const slug = title.toLowerCase().replace(' ', '-')
      const cardId = `card-${slug}`
      return cardId
    },
    getYposition(to) {
      const target = document.querySelector(to.hash)
      return target.getBoundingClientRect().top - 50
    }
  }
}
</script>

<style lang="scss">
#grid {
  content: '';
  flex: auto;
}
// .grid {
//   transition: opacity 200ms ease-in;
//   opacity: 0;
//   &.grid-ready {
//     opacity: 1;
//   }
// }
</style>
