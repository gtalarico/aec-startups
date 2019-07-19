<template>
  <div id="grid">
    <transition-group
      name="list-complete"
      tag="div"
      class="box-entry-list d-flex flex-wrap justify-content-md-center justify-content-center"
    >
      <card
        v-for="entry in startups"
        v-bind:key="entry.title"
        v-bind="entry"
        class="list-complete-item"
        :card-id="idFromTitle(entry.title)"
        @click="$router.push({ path: `#${idFromTitle(entry.title)}` })"
      />
    </transition-group>
  </div>
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
// Adds an empty content at end of box-entry-list to
// keep last centered box aligned left
.box-entry-list:last-child::after {
  content: '';
  width: 36.5rem;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
