<template>
  <div
    :id="cardId"
    class="card"
    :class="{ 'card-selected': $route.hash.includes(cardId) }"
    @click="$emit('click')"
  >
    <img v-if="image" class="card-img-top" :src="image" alt="Logo" />
    <div v-else class="card-img-top no-logo" alt="Logo" />
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text text-muted location">
          <em>{{ location }}</em>
        </p>

        <p class="card-text">
          {{ description }}
        </p>
        <p class=""></p>

        <!-- <p class="card-text">
          <span class="label">Funding</span>
          {{ funding || '-' }}
        </p> -->
      </div>
      <div>
        <a :href="website" target="blank" class="card-link">Website</a>
        <a v-if="crunchbase" :href="crunchbase" target="blank" class="card-link"
          >Crunchbase</a
        >
      </div>
    </div>
    <!-- <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <span class="label">Funding</span>
        {{ funding || '-' }}
      </li>
    </ul> -->
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

<style lang="scss">
.card {
  width: 14rem;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  margin: 0 1.5rem 1.25rem 0;
}

.card:hover,
.card-selected {
  border-color: #999;
  box-shadow: 1px 5px 7px 0 rgba(0, 0, 0, 0.2);
}

.card-img-top {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid #eee;

  &.no-logo {
    background: linear-gradient(15deg, #14af83, #15b89a);
  }
}

.card-title {
  font-size: 0.9rem;
}

.card-link {
  font-weight: 700 !important;
}

.card-text,
.card-location,
.card-body a,
.card .list-group li {
  font-size: 0.65rem;
  .label {
    display: block;
    font-weight: 700;
  }
  &.location {
    margin-top: -12px;
    font-size: 0.6rem;
  }
}
</style>
