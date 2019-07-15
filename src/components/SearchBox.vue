<template>
  <input
    contenteditable="true"
    type="text"
    class="search-box"
    aria-describedby="search-box"
    placeholder="Search"
    @input="handleInput"
    v-model="query"
  />
</template>
<script>
import { debounce } from '@/utils'

export default {
  components: {},
  data() {
    return {
      query: '',
      debouncedInput: ''
    }
  },
  computed: {},
  methods: {
    handleInput: debounce(
      function(event) {
        const el = event.target
        const inputText = el.value
        this.$emit('search-input', inputText)
      },
      400,
      false,
      function(event) {
        this.resizeElement(event.target)
      }
    ),
    resizeElement(el) {
      const inputText = el.value
      this.getTextWidth(inputText)
      if (inputText.length >= 1) {
        const textWidth = this.getTextWidth(inputText)
        el.style.width = `${textWidth}px`
      } else {
        el.style.width = '100%'
      }
    },
    getTextWidth(text) {
      const canvas =
        document.getElementById('fake-text-canvas') ||
        document.createElement('canvas')
      canvas.id = 'fake-canvas'
      var context = canvas.getContext('2d')
      const fontFamily = window
        .getComputedStyle(canvas, null)
        .getPropertyValue('font-family')
      context.font = fontFamily
      var metrics = context.measureText(text)
      return metrics.width + 3 + text.length * 0.75
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

.search-box {
  background-color: transparent !important;
  border: none;
  border-bottom: 2px solid transparent;
}

.search-box:not(:placeholder-shown) {
  border-bottom: 2px solid #333;
}

::-webkit-input-placeholder {
  color: #333;
}
::-moz-placeholder {
  color: #333;
  opacity: 1;
}
::-ms-placeholder {
  color: #333;
}
::placeholder {
  color: #333;
}
</style>
