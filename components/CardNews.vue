<template>
  <div class="card">
    <!-- <div class="card-img-top" alt="Logo" /> -->
    <div class="card-body card-news">
      <a
        class="twitter-timeline"
        data-height="400"
        href="https://twitter.com/aec_startups?ref_src=twsrc%5Etfw"
        >Tweets by aec_startups</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  mounted() {}
}
</script>

<style lang="scss">
.card-news {
  height: 425px;
}
</style>
