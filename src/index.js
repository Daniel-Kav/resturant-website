import { createHomePage } from './homepage';
import { createContactTab } from './contactTab';
import { createMenuTab } from './menuTab';

// Initial pge load
createHomePage();

const contentDiv = document.getElementById("content");
const tabs = document.querySelectorAll(".tab");
const tabContents = {
    "home": createHomePage,
    "contact": createContactTab,
    "menu": createMenuTab
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove current content
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }

        // Get tab ID and call corresponding tab content function
        const tabId = tab.getAttribute("data-tab");
        tabContents[tabId]();

        // Add active class to clicked tab
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});
