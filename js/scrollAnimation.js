const scrollOffset = 100
const scrollElement = document.querySelector('.jsScrollAnimation')

const scrollElementInView = (elem, offset = 0) => {
    const elementTop = elem.getBoundingClientRect().top
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    )
}

const displayScrollElement = () => {
    scrollElement.classList.add('scrolled')
}
const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled')
}

const handleScrollAnimation = () => {
    if(scrollElementInView(scrollElement, scrollOffset)) {
        displayScrollElement()
    } else {
        hideScrollElement()
    }
}

window.addEventListener('scroll', () => {
    handleScrollAnimation()
})