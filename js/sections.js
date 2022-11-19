// helper for HTML elements creation
const createChildElement = (parentElement, element, className) => {
  const childElement = document.createElement(element)
  parentElement.appendChild(childElement)
  childElement.classList.add(className)
}
const lineContainer = document.querySelector('#lineContainer')


for (let i = 0; i < 19; i++) {
  createChildElement(lineContainer, 'div', 'line')
}

const titles = ["Me", "Skills", "Education", "Work", "Contact"]

const skills = document.querySelector("#skills .sectionArticle")
console.log(skills)
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
  createChildElement(skills, "img", "skillsIcon")
}
let iconCoding = skills.querySelectorAll("img")
console.log(iconCoding)
for (let i = 0; skillsIconsCoding.length; i++) {
  iconCoding[i].src = `img/icons/${skillsIconsCoding[i].image}`
}
