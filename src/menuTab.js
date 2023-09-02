// menuTab.js
export function createMenuTab() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("tab-content");
    menuDiv.innerHTML = `
        <h2>Menu</h2>
        <p>Appetizers, main courses, desserts, and more! Explore our delicious menu option.</p>
    `;

    return menuDiv;
}
