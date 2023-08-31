// homepage.js
export function createHomePage() {
    const contentDiv = document.getElementById("content");

    const header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the Finest Dining</p>
    `;

    const restaurantImage = document.createElement("img");
    restaurantImage.classList.add("restaurant-image");
    restaurantImage.src = "restaurant-image.jpg";
    restaurantImage.alt = "Restaurant Interior";

    const restaurantInfo = document.createElement("div");
    restaurantInfo.classList.add("restaurant-info");
    restaurantInfo.innerHTML = `
        <h2>About Us</h2>
        <p>Discover the exquisite flavors and unique ambiance of our restaurant. We take pride in offering a diverse menu prepared with the finest ingredients. Our friendly staff is dedicated to making your dining experience memorable.</p>
        <p>Join us for a gastronomic journey that delights the senses and satisfies the palate.</p>
    `;

    contentDiv.appendChild(header);
    contentDiv.appendChild(restaurantImage);
    contentDiv.appendChild(restaurantInfo);
}
