export function getYposition(to, from, savedPosition) {
  const target = document.querySelector(to.hash)
  return target.getBoundingClientRect().top - 50
}
