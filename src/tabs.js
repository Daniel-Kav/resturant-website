import createContsctPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomepage from "./reasturant";

const createTabs = () => {
    const content = document.querySelector('#content');

    // create the three divs for the tabs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    // set ids for the tabs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    // set class for the tabs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    // set text content to the div
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    // append the divs to the content div
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    // add event listeners to the div
    div1.addEventListener('click', ()=>{
        createRestaurantHomepage();
    })
    div2.addEventListener('click', ()=>{
        createMenuPage();
    });
    div3.addEventListener('click', ()=>{
        createContsctPage();
    });
};

export default createTabs;