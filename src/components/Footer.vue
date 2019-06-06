<template>
  <div class="footer container-fluid py-4 text-center">
    <!-- TWITTER FOLLOW -->
    Follow
    <a
      class="twitter-follow-button text-center"
      href="https://twitter.com/aec_startups?ref_src=twsrc%5Etfw"
      data-show-count="false"
      >@aec_startups</a
    >
    <!-- TWITTER -->
    <hr />
    <p class="text-muted font-italic">
      AecStartups.com is an open-source list of Shiny Startups in the AEC Space.
      <br />
    </p>
    <p class="text-secondary muted">
      <a class="text-muted" href="https://twitter.com/gtalarico"
        >Gui Talarico</a
      >
      <span>|</span>
      <a class="text-muted" href="https://github.com/gtalarico/aec-startups"
        >Contribute</a
      >
    </p>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
.footer {
  font-size: 85%;

  .muted a {
    font-size: 85%;
    font-weight: 400;
  }
  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
</style>
