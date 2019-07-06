<template>
  <div
    :id="cardId"
    class="card"
    :class="{ 'card-selected': $route.hash.includes(cardId) }"
    @click="$emit('click')"
  >
    <img v-if="image" class="card-img-top" :src="image" alt="Logo" />
    <div v-else class="card-img-top no-logo" alt="Logo" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text text-muted location">
        <em>{{ location }}</em>
      </p>

      <p class="card-text">
        {{ description }}
      </p>
      <p class=""></p>

      <a :href="website" target="blank" class="card-link">Website</a>
      <a v-if="crunchbase" :href="crunchbase" target="blank" class="card-link"
        >Crunchbase</a
      >
    </div>
    <ul class="list-group list-group-flush">
      <li v-if="funding" class="list-group-item">
        <span class="label">Funding</span> {{ funding }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'cardId',
    'title',
    'description',
    'website',
    'image',
    'crunchbase',
    'funding',
    'tags',
    'industries',
    'location'
  ],
  mounted() {}
}
</script>

<style lang="scss"></style>
