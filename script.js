let focusCount = 0;
let hoverCounts = [];

function pageLoaded() {
    console.log("🚀 Page has loaded successfully");

    addTabFocus();
    addFocusBlurListeners();
    addMouseListeners();
    addClickToggleBorders();
    countNavFocus();
    logExternalLinkClick();
}

function addTabFocus() {
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        images[i].setAttribute("title", `Image #${i + 1}`);
        hoverCounts[i] = 0;
        console.log(`✅ Tabindex & tooltip added to image ${i + 1}`);
    }
}

function addFocusBlurListeners() {
    const images = document.querySelectorAll("img");

    images.forEach((img, index) => {
        img.addEventListener("focus", () => {
            focusCount++;
            console.log(`🟦 Image ${index + 1} focused (${focusCount} total focuses)`);
            img.style.outline = "3px dashed #2980b9";
            img.style.boxShadow = "0px 0px 12px rgba(0, 150, 255, 0.6)";
        });

        img.addEventListener("blur", () => {
            console.log(`⬜ Image ${index + 1} blurred`);
            img.style.outline = "none";
            img.style.boxShadow = "none";
        });
    });
}

function addMouseListeners() {
    const images = document.querySelectorAll("img");

    images.forEach((img, index) => {
        img.addEventListener("mouseover", () => {
            hoverCounts[index]++;
            console.log(`🖱️ Mouse over image ${index + 1} (${hoverCounts[index]} times)`);
        });

        img.addEventListener("mouseleave", () => {
            console.log(`👋 Mouse left image ${index + 1}`);
        });
    });
}

function addClickToggleBorders() {
    const images = document.querySelectorAll("img");

    images.forEach((img, index) => {
        let toggled = false;
        img.addEventListener("click", () => {
            toggled = !toggled;
            if (toggled) {
                img.style.border = "5px solid orange";
                console.log(`🟠 Image ${index + 1} border toggled ON`);
            } else {
                img.style.border = "3px solid #555"; // default from CSS
                console.log(`⚪ Image ${index + 1} border toggled OFF`);
            }
        });
    });
}

function countNavFocus() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link, index) => {
        link.setAttribute("tabindex", "0");

        link.addEventListener("focus", () => {
            console.log(`🔗 Navigation link focused: "${link.textContent}"`);
        });
    });
}

function logExternalLinkClick() {
    const externalLinks = document.querySelectorAll("a[target='_blank']");
    externalLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            console.log(`🌐 External link clicked: ${link.href}`);
        });
    });
}

window.onload = pageLoaded;
