const toc = document.getElementById("tocList")

for (let heading of document.getElementsByTagName("h2")) {
    if (heading.className != "tocHead") {
        heading.id = Math.random()
        newLI = document.createElement("li")
        newA = document.createElement("a")
        newA.href = `#${heading.id}`
        newA.innerText = heading.innerText
        newA.addEventListener("click", (e) => {
            heading.parentNode.style.boxShadow = "inset 5px 5px 5px rgba(0, 0, 0, 0.2), inset -5px -5px 5px rgba(255, 255, 255, 0.2)"
            setTimeout(() => {
                heading.parentNode.style.boxShadow = ""
            }, 200)
        })
        newLI.appendChild(newA)
        toc.appendChild(newLI)
    }
}