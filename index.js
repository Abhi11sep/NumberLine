function toggleArrowAndDot(element) {
    console.log(element)
    for (i = 1; i <= 12; i++) {
        const arrow = document.getElementById(`downarrow${i}`)
        arrow.style.display = "none"
    }
    const arrow = document.getElementById(`downarrow${element}`)
    arrow.style.display = "inline-block"
}