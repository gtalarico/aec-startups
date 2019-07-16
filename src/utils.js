// Standard Debounce Function with an optional runAlways added
function debounce(func, wait, immediate) {
  let timeout
  return function() {
    const context = this,
      args = arguments
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export { debounce }
