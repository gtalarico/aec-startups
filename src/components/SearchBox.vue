<template>
  <div class="d-flex">
    <input
      ref="input"
      contenteditable="true"
      type="text"
      class="search-box"
      aria-describedby="search-box"
      placeholder="Search"
      @input="handleInput"
      v-model="query"
    />
    <span v-show="query" class="btn-close" @click="clearQuery()"></span>
  </div>
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
  watch: {
    query() {
      const el = document.querySelector('.search-box')
      this.$nextTick(() => this.resizeElement(el))
    }
  },
  methods: {
    clearQuery() {
      this.query = ''
      this.$emit('search-input', '')
    },
    handleInput: debounce(function(event) {
      const el = event.target
      const inputText = el.value
      this.$emit('search-input', inputText)
    }, 400),
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
      const context = canvas.getContext('2d')
      const fontFamily = window
        .getComputedStyle(canvas, null)
        .getPropertyValue('font-family')
      context.font = fontFamily
      const metrics = context.measureText(text)
      const baseWidth = metrics.width + 5
      return baseWidth + text.length * 1.25
      // return baseWidth + text.length * 0.75
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

.btn-close {
  margin-top: 1px;
  margin-left: 0.5rem;
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  opacity: 1;
  cursor: pointer;
  &:hover {
    &::before,
    &::after {
      background: $primary;
    }
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    background: black;
  }
  &::before {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
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
