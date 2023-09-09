

const createReasturantHomepage = () => { 
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create and append image elements
    const image = document.createElement('img');
    image.src = 'https://res.cloudinary.com/sagacity/image/uploads/'
    image.height = '300';
    pageContent.appendChild(image);

    // Create and append headline elements
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our reasturant ';
    pageContent.appendChild(headline);

    // Create and append copy elements
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best dishes in the world';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
};