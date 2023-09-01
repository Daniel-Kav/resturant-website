// contactTab.js
export function createContactTab() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("tab-content");
    contactDiv.innerHTML = `
        <h2>Contact Us</h2>
        <p>Email: contact@restaurant.com</p>
        <p>Phone: (123) 456-7890</p>
    `;

    return contactDiv;
}
