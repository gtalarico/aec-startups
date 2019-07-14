<template>
  <div
    class="box-entry mb-4"
    :class="{ 'box-entry-selected': $route.hash.includes(cardId) }"
    @click="$emit('click')"
  >
    <div class="d-flex flex-row align-items-top">
      <div class="logo">
        <img :src="image" :class="{ 'no-logo': !image }" alt="Logo" />
      </div>
      <div class="info-box">
        <p class="title">{{ title }}</p>
        <p class="location">{{ location }}</p>
        <p>{{ description }}</p>
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
  mounted() {}
}
</script>

<style lang="scss">
.box-entry {
  display: block;
  margin: 0 1.5rem 1.25rem 0;
  border: 1px solid #dedede;
  border-radius: 10px;
  overflow: hidden;

  font-size: 0.65rem;

  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  .info-box {
    padding: 0.5rem 0.75rem;
  }
  .details-box {
    padding-top: 0.5rem;
    padding-right: 0.5rem;
  }
  &:hover,
  &.box-entry-selected {
    border-color: #999;
    box-shadow: 1px 5px 7px 0 rgba(0, 0, 0, 0.2);
  }

  a {
    font-weight: 400;
  }

  .logo {
    img {
      object-fit: cover;
      object-position: center;
      width: 10rem;
      height: 10rem;
      // border-bottom: 1px solid #eee;

      &.no-logo {
        background: linear-gradient(15deg, #14af83, #15b89a);
      }
    }
  }

  .info-box {
    width: 14rem;

    .title {
      font-size: 0.9rem;
      margin-bottom: 0;
    }

    .location {
      padding-top: 0;
      margin-bottom: 0.5rem;
      font-size: 0.6rem;
      color: #444;
    }
  }

  .details-box {
    width: 6rem;

    ul {
      list-style: none;
      padding-left: 0;
      li {
        // padding-left: 0.75rem;
      }
    }
  }

  .label {
    display: block;
    font-weight: 700;
  }
}
</style>
