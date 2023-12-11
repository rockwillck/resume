const toc = document.getElementById("tocList")

for (let heading of document.getElementsByTagName("h2")) {
    if (heading.className != "tocHead") {
        heading.id = Math.random()
        newLI = document.createElement("li")
        newA = document.createElement("a")
        newA.href = `#${heading.id}`
        newA.innerText = heading.innerText
        newA.addEventListener("click", (e) => {
            heading.parentNode.style.border = "solid"
            setTimeout(() => {
                heading.parentNode.style.border = ""
            }, 200)
        })
        newLI.appendChild(newA)
        toc.appendChild(newLI)
    }
}