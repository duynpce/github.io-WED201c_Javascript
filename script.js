// This function runs when the page finishes loading
function pageLoaded() {
    console.log("Page has loaded successfully."); // For onload

    addTabFocus(); // Call function to add tabindex attributes
    addFocusBlurListeners(); // Add focus and blur event listeners
    addMouseListeners(); // Keep mouse event listeners (as required)
}

// Add tabindex to all images and log it
function addTabFocus() {
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log(`Tabindex added to image ${i + 1}`);
    }
}

// Add focus and blur event listeners to images
function addFocusBlurListeners() {
    const images = document.querySelectorAll("img");

    images.forEach((img, index) => {
        img.addEventListener("focus", () => {
            console.log(`Image ${index + 1} focused`);
            img.style.outline = "3px solid #3498db";
        });

        img.addEventListener("blur", () => {
            console.log(`Image ${index + 1} blurred`);
            img.style.outline = "none";
        });
    });
}

// Add mouse event listeners (existing ones you were told not to delete)
function addMouseListeners() {
    const images = document.querySelectorAll("img");

    images.forEach((img, index) => {
        img.addEventListener("mouseover", () => {
            console.log(`Mouse over image ${index + 1}`);
        });

        img.addEventListener("mouseleave", () => {
            console.log(`Mouse left image ${index + 1}`);
        });
    });
}

// Assign pageLoaded to window onload
window.onload = pageLoaded;
