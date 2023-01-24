// helper for HTML elements creation
const createChildElement = (parentElement, element, className) => {
  const childElement = document.createElement(element)
  parentElement.appendChild(childElement)
  childElement.classList.add(className)
}
const lineContainer = document.querySelector("#lineContainer")

for (let i = 0; i < 19; i++) {
  createChildElement(lineContainer, "div", "line")
}

const codingIcons = document.querySelector("#codingIcons")
const skillsIconsCoding = [
  { image: "HTMLicon.png" },
  { image: "CSSicon.png" },
  { image: "CSSFLEXicon.png" },
  { image: "CSSGRIDicon.png" },
  { image: "SASSicon.png" },
  { image: "JSicon.png" },
  { image: "REACTicon.png" },
  { image: "REDUXicon.png" },
  { image: "jQueryicon.png" },
  { image: "GITicon.png" },
  { image: "JSONicon.png" },
]
for (let i = 0; i < skillsIconsCoding.length; i++) {
  createChildElement(codingIcons, "img", "skillsIcon")
}
let iconCoding = codingIcons.querySelectorAll("img")
for (let i = 0; i < skillsIconsCoding.length; i++) {
  iconCoding[i].src = `img/icons/${skillsIconsCoding[i].image}`
  iconCoding[i].classList.add("jsScrollAnimation", "rotateY")
}

const cpuIcons = document.querySelector("#cpuIcons")
const skillsIconsCPU = [
  { image: "AIicon.png" },
  { image: "PSicon.png" },
  { image: "INKSKAPEicon.png" },
  { image: "GOOGLEicon.png" },
  { image: "OFFICEicon.png" },
  { image: "VSCODEicon.png" },
]
for (let i = 0; i < skillsIconsCPU.length; i++) {
  createChildElement(cpuIcons, "img", "skillsIcon")
}
let iconCPU = cpuIcons.querySelectorAll("img")
for (let i = 0; i < skillsIconsCPU.length; i++) {
  iconCPU[i].src = `img/icons/${skillsIconsCPU[i].image}`
  iconCPU[i].classList.add("jsScrollAnimation", "rotateX")
}

const languageIcons = document.querySelector("#languageIcons")
const skillsIconsLanguage = [
  { image: "NLflag100.png" },
  { image: "ENGflag100.png" },
  { image: "GERflag100.png" },
]
for (let i = 0; i < skillsIconsLanguage.length; i++) {
  createChildElement(languageIcons, "img", "languageIcon")
}
let iconLanguage = languageIcons.querySelectorAll("img")
for (let i = 0; i < skillsIconsLanguage.length; i++) {
  iconLanguage[i].src = `img/icons/${skillsIconsLanguage[i].image}`
  iconLanguage[i].classList.add("jsScrollAnimation", "grow")
}
const iFrameLink = document.querySelector("#iFrameLink")
const iFrameContainer = document.querySelector("#iFrameContainer")
iFrameLink.addEventListener("click", () => {
  iFrameContainer.style.height = 100%
})