<template>
  <div>
    <div v-show="isReady" id="twitter-container">
      <a
        class="twitter-timeline"
        data-height="400"
        href="https://twitter.com/aec_startups"
        >Tweets by aec_startups</a
      >
      <!-- <script injected> -->
    </div>
    <div v-if="!isReady" class="d-flex justify-content-center">
      <div
        class="spinner-border text-primary"
        role="status"
        style="width: 2rem; height: 2rem;"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data: function() {
    return {
      isReady: false
    }
  },
  components: {},
  mounted() {
    let container = document.getElementById('twitter-container')
    let twitterScript = document.createElement('script')
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    twitterScript.async = true
    twitterScript.setAttribute('charset', 'utf-8')
    container.appendChild(twitterScript)
    setTimeout(() => {
      this.isReady = true
    }, 1000)
  }
}
</script>

<style lang="scss"></style>
