<template>
  <div class="card">
    <img v-if="image" class="card-img-top" :src="image" alt="Logo" />
    <div v-else class="card-img-top no-logo" alt="Logo" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
    <!-- <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
    </ul> -->
    <div class="card-body">
      <a :href="website" target="blank" class="card-link">Website</a>
      <a v-if="crunchbase" :href="crunchbase" target="blank" class="card-link"
        >Crunchbase</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    website: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    crunchbase: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    industries: {
      type: Array,
      default: () => []
    }
  },
  mounted() {}
}
</script>

<style lang="scss"></style>
