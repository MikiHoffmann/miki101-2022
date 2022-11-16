//const scrollOffset = 100
const scrollElements = document.querySelectorAll(".jsScrollAnimation")

const scrollElementInView = (elem, divident = 1) => {
  const elementTop = elem.getBoundingClientRect().top
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / divident
  )
}
const scrollElementOutView = (elem) => {
  const elementTop = elem.getBoundingClientRect().top
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  )
}

const displayScrollElement = (element) => {
  element.classList.add("scrolled")
}
const hideScrollElement = (element) => {
  element.classList.remove("scrolled")
}

const handleScrollAnimation = () => {
  scrollElements.forEach((elem) => {
    if (scrollElementInView(elem, 1.25)) {
      displayScrollElement(elem)
    } else if (scrollElementOutView(elem)) {
      hideScrollElement(elem)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation()
})
