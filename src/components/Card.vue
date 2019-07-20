<template>
  <div
    class="box-entry"
    :class="{ 'box-entry-selected': $route.hash.includes(cardId) }"
    @click="$emit('click')"
  >
    <div class="d-flex flex-wrap flex-row align-items-top">
      <div class="logo d-flex align-items-center justify-content-center">
        <div v-show="!imageReady" class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <img :id="cardId" v-show="imageReady" />
      </div>
      <div class="info-box">
        <p class="title">{{ title }}</p>
        <p class="location">{{ location }}</p>
        <p class="description">{{ description }}</p>
      </div>
      <div class="details-box">
        <p>
          <span class="label">Funding</span>
          {{ funding || '-' }}
        </p>
        <ul>
          <li>
            <a v-if="website" :href="website" target="blank" class="card-link"
              >Website</a
            >
          </li>
          <li>
            <a
              v-if="crunchbase"
              :href="crunchbase"
              target="blank"
              class="card-link"
              >Crunchbase</a
            >
          </li>
        </ul>
      </div>
    </div>
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
  data: () => {
    return {
      imageReady: false
    }
  },
  mounted() {
    const cardId = this.cardId
    const img = new Image()
    img.onload = () => {
      const i = document.getElementById(cardId)
      i.src = img.src
      this.imageReady = true
    }
    img.onerror = () => {
      this.imageReady = true
    }
    img.src = this.image
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

.box-entry {
  display: block;
  font-size: 0.75rem;
  border: 1px solid #dedede;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  &:hover,
  &.box-entry-selected {
    border-color: #999;
    box-shadow: 1px 5px 7px 0 rgba(0, 0, 0, 0.2);
  }

  // desktop
  @include media-breakpoint-up(sm) {
    margin: 0 0 1.5rem 1.5rem;
  }
  margin-top: 1.5rem;

  a {
    font-weight: 400;
  }

  .logo {
    @include media-breakpoint-up(sm) {
      width: 13rem;
      height: 11rem;
    }
    width: 30rem;
    height: 10rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      // border-bottom: 1px solid #eee;

      &.no-logo {
        background: linear-gradient(15deg, #14af83, #15b89a);
      }
    }
  }

  .info-box {
    padding: 0.75rem 0.75rem;

    width: 22rem;
    @include media-breakpoint-up(sm) {
      width: 16rem;
      padding-top: 0.5rem;
    }

    .title {
      font-size: 1rem;
      margin-bottom: 0;
    }

    .location {
      padding-top: 0;
      margin-bottom: 0.5rem;
      font-size: 0.7rem;
      color: #444;
    }

    .description {
      margin-bottom: 0;
    }
  }

  .details-box {
    @include media-breakpoint-up(sm) {
      padding-left: 0;
    }
    padding-left: 0.75rem;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    width: 6rem;

    ul {
      list-style: none;
      padding-left: 0;
    }
  }

  .label {
    display: block;
    font-weight: 700;
  }
}
</style>
