<template>
  <div class="page-overlay">
    <!-- <div v-rellax="{ speed: -4 }">
      <img id="overlay-asteroid" src="@/assets/imgs/icons8-asteroid-80.png" />
    </div>
    <div v-rellax="{ speed: 2 }">
      <img id="overlay-rocket" src="@/assets/imgs/icons8-rocket-100.png" />
    </div>
    <div v-rellax="{ speed: 3 }">
      <img id="overlay-house" src="@/assets/imgs/icons8-home-120.png" />
    </div>
    <div v-rellax="{ speed: 1 }">
      <img id="overlay-new-york" src="@/assets/imgs/icons8-new-york-80.png" />
    </div>
    <div v-rellax="{ speed: -2 }">
      <img
        id="overlay-robot"
        src="@/assets/imgs/icons8-science-fiction-100.png"
      />
    </div>
    <div v-rellax="{ speed: -1 }">
      <img id="overlay-mind-map" src="@/assets/imgs/icons8-mind-map-64.png" />
    </div> -->
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
.page-overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
}
#overlay-asteroid {
  position: absolute;
  opacity: 0.5;
  right: 0;
  margin-top: 25vh;
  // margin-right: -20px;
}
#overlay-rocket {
  position: absolute;
  opacity: 0.5;
  margin-top: 75vh;
  margin-left: 15px;
}
#overlay-mind-map {
  position: absolute;
  opacity: 0.5;
  right: 0;
  margin-top: 125vh;
  margin-right: 20px;
}
#overlay-house {
  position: absolute;
  opacity: 0.5;
  width: 80px;
  margin-top: 175vh;
  margin-left: 15px;
}
#overlay-new-york {
  position: absolute;
  opacity: 0.5;
  right: 0;
  margin-top: 225vh;
  margin-right: 0px;
}
#overlay-robot {
  position: absolute;
  opacity: 0.5;
  margin-top: 225vh;
  margin-right: -10px;
}
</style>
