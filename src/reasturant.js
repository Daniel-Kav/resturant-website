const createRestaurantHomepage = () => { 
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append image elements
    const image = document.createElement('img');
    image.src = './assets/rest1.avif';
    image.height = '300';
    pageContent.appendChild(image);

    // Create and append headline elements
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant';
    pageContent.appendChild(headline);

    // Create and append copy elements
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best dishes in the world';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
};

export default createRestaurantHomepage;
