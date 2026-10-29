const allP = Array.from(document.querySelectorAll("p"));
const navLinks = Array.from(document.querySelectorAll(".top a"));

function setActiveSection(targetId, shouldScroll = true) {
    if (!targetId) {
        window.location.href = "#intro";
        return;
    }

    const targetP = document.getElementById(targetId);
    if (!targetP) return;

    allP.forEach(p => {
        if (p === targetP) {
            p.classList.remove("default");
            p.classList.add("highlight");
        } else {
            p.classList.remove("highlight", "default");
        }
    });

    navLinks.forEach(a => {
        if (a.getAttribute("href") === "#" + targetId) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    });

    if (shouldScroll) {
        targetP.scrollIntoView({ behavior: "smooth" });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
        const href = a.getAttribute("href");
        const targetId = href.slice(1);
        setActiveSection(targetId, true);

        if (targetId) {
            history.pushState(null, "", "#" + targetId);
        } else {
            history.pushState(null, "", window.location.pathname + window.location.search);
        }
    });
});

window.addEventListener("popstate", () => {
    const hash = window.location.hash.slice(1);
    setActiveSection(hash, true);
});

const initialHash = window.location.hash.slice(1);
if (initialHash && document.getElementById(initialHash)) {
    setActiveSection(initialHash, false);
    document.getElementById(initialHash).scrollIntoView({ behavior: "auto" });
} else {
    setActiveSection("", false);
}