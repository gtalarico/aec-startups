<template>
  <main id="grid" class="grid" :class="{ 'grid-ready': gridIsReady }">
    <card-news />
    <card v-for="(entry, i) in startups" :key="i" v-bind="entry" />
    <card-add />
  </main>
</template>

<script>
import MagicGrid from 'magic-grid'
import Card from '~/components/Card'
import CardAdd from '~/components/CardAdd'
import CardNews from '~/components/CardNews'

export default {
  components: {
    Card,
    CardAdd,
    CardNews
  },
  props: {
    startups: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      magicGrid: null
    }
  },
  computed: {
    gridIsReady() {
      return this.magicGrid ? this.magicGrid.ready() : false
    }
  },
  watch: {
    startups() {
      this.$nextTick(() => {
        this.initGrid()
      })
    }
  },
  mounted() {
    this.initGrid()
  },
  methods: {
    initGrid() {
      this.magicGrid = new MagicGrid({
        container: this.$el,
        items: this.startups.length,
        animate: true,
        gutter: 20
        // useMin: true
        // maxColumns: 5
      })
      this.magicGrid.listen()
    }
  }
}
</script>

<style lang="scss">
.grid {
  transition: opacity 200ms ease-in;
  opacity: 0;
  &.grid-ready {
    opacity: 1;
  }
}
</style>
