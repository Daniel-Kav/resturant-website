import createRestaurantHomepage from "./reasturant";
import createTabs from "./tabs";


export default function initialLoad() {
    createTabs();
    createRestaurantHomepage();
}
