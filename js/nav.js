window.scrollTo(top)

const iFrameLink = document.querySelector("#iFrameLink")
const iFrameContainer = document.querySelector("#iFrameContainer")
iFrameContainer.style.height = "0"
iFrameLink.addEventListener("click", () => {
  iFrameContainer.style.height = "100%"
})
const iFrameClose = document.querySelector("#iFrameClose")
iFrameClose.addEventListener("click", () => {
  iFrameContainer.style.height = "0"
})
const menuButton = document.getElementById("menuButton")
menuButton.addEventListener("click", toggleOverlay)

const topBeam = document.getElementById("topMenuBeam")
const middleBeam = document.getElementById("middleMenuBeam")
const bottomBeam = document.getElementById("bottomMenuBeam")
const menuOverlay = document.getElementById("menuOverlay")
const menuLink = document.getElementsByClassName("menuLink")
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", toggleOverlay)
}
function toggleOverlay() {
  topBeam.classList.toggle("topMenuBeamClose")
  middleBeam.classList.toggle("middleMenuBeamClose")
  bottomBeam.classList.toggle("bottomMenuBeamClose")
  menuOverlay.classList.toggle("menuOverlayShow")
}
// activate menu buttons
window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id")
      // if in view
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(`#menuOverlay a[href="#${id}"]`)
          .classList.add("active")
        // if out of view
      } else {
        document
          .querySelector(`#menuOverlay a[href="#${id}"]`)
          .classList.remove("active")
      }
    })
  })
  // track all section that have an ID
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section)
  })
})
