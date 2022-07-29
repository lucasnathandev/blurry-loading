const loadingText = document.querySelector(".loading")
const img = document.querySelector("img")

const globals = (function () {
  const load = 0
  const int = setInterval(blurring, 30)
  return {
    load,
    int,
    step: 30 / 100,
  }
})()

let { int, load, step } = globals

function blurring() {
  load++
  if (load >= 100) {
    clearInterval(int)
  }
  img.style.filter = `blur(${30 - step * load}px)`
  loadingText.textContent = `${load}%`
  loadingText.style.opacity = 1 - load / 100
}

function main() {}

main()
