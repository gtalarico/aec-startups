<template>
  <main id="grid">
    <card v-for="(entry, i) in startups" :key="i" v-bind="entry" />
    <card-add />
  </main>
</template>

<script>
import MagicGrid from 'magic-grid'
import Card from '~/components/Card'
import CardAdd from '~/components/CardAdd'

export default {
  components: {
    Card,
    CardAdd
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
        // static: true,
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

<style lang="scss"></style>
