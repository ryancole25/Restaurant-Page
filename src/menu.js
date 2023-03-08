import mainPhoto from "./images/LM-backdrop.jpeg";
import calimariPhoto from "./images/fried-calamari.jpeg";
import lobsterRollPhoto from "./images/lobster-roll.jpeg";
import garlicBreadsticksPhoto from "./images/garlic-breadsticks.jpeg";
import shrimpSkewersPhoto from "./images/shrimp-skewers.jpeg";
import wavesPhoto from "./images/waves.png";

import facebookLogo from "./images/facebooklogo.svg";
import instagramLogo from "./images/instagramlogo.svg";

class foodItem {
  constructor(item, description, price) {
    this.item = item;
    this.description = description;
    this.price = price;
  }
}

class Appetizers {
  constructor() {
    this.appList = [];
  }
  newApp(item, description, price) {
    let x = new foodItem(item, description, price);
    this.appList.push(x);
    return x;
  }
  get allAppetizers() {
    return this.appList;
  }
}

class MainCourses {
  constructor() {
    this.mainCourseList = [];
  }
  newMainCourse(item, description, price) {
    let y = new foodItem(item, description, price);
    this.mainCourseList.push(y);
    return y;
  }
  get allMainCourses() {
    return this.mainCourseList;
  }
}

class Desserts {
  constructor() {
    this.dessertList = [];
  }
  newDessert(item, description, price) {
    let z = new foodItem(item, description, price);
    this.dessertList.push(z);
    return z;
  }
  get allDesserts() {
    return this.dessertList;
  }
}

// Edit Apps here
let appArray = new Appetizers();
appArray.newApp("Garlic Bread", "3 warm breadsticks", "$6");
appArray.newApp("Mussels", "White wine and garlic", "$20");
appArray.newApp("Fried Calamari", "Lemon, served with calimari sauce", "$13");
appArray.newApp("Buffalo Shrimp", "5 shrimp", "$8");

// Edit Main Courses here
let mainCourseArray = new MainCourses();
mainCourseArray.newMainCourse(
  "Lobster Roll",
  "On fresh italian bread, with fries",
  "$25"
);
mainCourseArray.newMainCourse(
  "Grilled Halibut",
  "Fresh caught, balsamic glaze",
  "$23"
);
mainCourseArray.newMainCourse(
  "Shrimp Skewers",
  "3 skewers with grilled vegetables",
  "$17"
);
mainCourseArray.newMainCourse(
  "Grilled Scallops",
  "6 scallops, with lemon",
  "$27"
);
mainCourseArray.newMainCourse("Grilled Chicken", "Land food", "$14");
mainCourseArray.newMainCourse("Fish Tacos", "3 tacos with toppings", "$19");
mainCourseArray.newMainCourse(
  "Seafood Pizza",
  "With shrimp and scallops",
  "$29"
);
mainCourseArray.newMainCourse("Sea Bass", "Flown in daily", "$34");
mainCourseArray.newMainCourse("Cheeseburger", "Lettuce, tomato, onion", "$14");

// Edit Desserts here
let dessertArray = new Desserts();
dessertArray.newDessert("Cheesecake", "Garnished with strawberries", "$9");
dessertArray.newDessert("Ice Cream", "Vanilla, with hot fudge", "$5");
dessertArray.newDessert("Fudge Brownie", "With nuts", "$6");

function menuPage() {
  const content = document.querySelector("#content");
  // Add photo of lake header
  content.appendChild(addSeafoodHeader());
  // Add the menu and photos
  content.appendChild(menuSection());

  content.appendChild(footer());
  return;
}

function addSeafoodHeader() {
  const seafoodHeader = document.createElement("div");
  seafoodHeader.classList.add("seafoodheader");
  const mainImg = document.createElement("img");
  mainImg.src = mainPhoto;
  seafoodHeader.appendChild(mainImg);
  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.innerHTML = "MENU";
  seafoodHeader.appendChild(banner);
  return seafoodHeader;
}

function menuSection() {
  const food = document.createElement("div");
  food.classList.add("food");
  let foodImage = document.createElement("div");
  foodImage.classList.add("food-image");
  const calamariImg = document.createElement("img");
  calamariImg.src = calimariPhoto;
  foodImage.appendChild(calamariImg);
  const lobsterRollImg = document.createElement("img");
  lobsterRollImg.src = lobsterRollPhoto;
  foodImage.appendChild(lobsterRollImg);
  food.appendChild(foodImage);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const foodType = document.createElement("div");
  foodType.classList.add("food-type");

  let title = document.createElement("div");
  title.classList.add("title");
  let wavesImg = document.createElement("img");
  wavesImg.src = wavesPhoto;
  title.innerHTML = "APPETIZERS";
  title.appendChild(wavesImg);
  foodType.appendChild(title);

  // Appetizers section
  for (let i = 0; i < appArray.allAppetizers.length; i++) {
    foodType.appendChild(
      addFoodItem(
        appArray.allAppetizers[i].item,
        appArray.allAppetizers[i].description,
        appArray.allAppetizers[i].price
      )
    );
  }

  title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "MAIN COURSES";
  wavesImg = document.createElement("img");
  wavesImg.src = wavesPhoto;
  title.appendChild(wavesImg);
  foodType.appendChild(title);

  // Main Course Section
  for (let i = 0; i < mainCourseArray.allMainCourses.length; i++) {
    foodType.appendChild(
      addFoodItem(
        mainCourseArray.allMainCourses[i].item,
        mainCourseArray.allMainCourses[i].description,
        mainCourseArray.allMainCourses[i].price
      )
    );
  }

  title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "DESSERTS";
  wavesImg = document.createElement("img");
  wavesImg.src = wavesPhoto;
  title.appendChild(wavesImg);
  foodType.appendChild(title);

  // Main Course Section
  for (let i = 0; i < dessertArray.allDesserts.length; i++) {
    foodType.appendChild(
      addFoodItem(
        dessertArray.allDesserts[i].item,
        dessertArray.allDesserts[i].description,
        dessertArray.allDesserts[i].price
      )
    );
  }

  menuContainer.appendChild(foodType);
  food.appendChild(menuContainer);

  foodImage = document.createElement("div");
  foodImage.classList.add("food-image");
  const breadsticksImg = document.createElement("img");
  breadsticksImg.src = garlicBreadsticksPhoto;
  foodImage.appendChild(breadsticksImg);
  const shrimpSkewersImg = document.createElement("img");
  shrimpSkewersImg.src = shrimpSkewersPhoto;
  foodImage.appendChild(shrimpSkewersImg);
  food.appendChild(foodImage);

  return food;
}

function addFoodItem(item, description, price) {
  let foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  let name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = item.toUpperCase();

  let cost = document.createElement("div");
  cost.classList.add("price");
  cost.innerHTML = price;

  let characteristics = document.createElement("div");
  characteristics.classList.add("description");
  characteristics.innerHTML = description;

  foodItem.appendChild(name);
  foodItem.appendChild(cost);
  foodItem.appendChild(characteristics);

  return foodItem;
}

function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const mediaApps = document.createElement("div");
  mediaApps.classList.add("media-apps");

  const facebook = document.createElement("a");

  facebook.target = "_blank";
  facebook.href = "http://www.facebook.com";

  const fbLogo = document.createElement("img");
  fbLogo.src = facebookLogo;
  facebook.appendChild(fbLogo);

  const instagram = document.createElement("a");
  instagram.href = "http://www.instagram.com";
  instagram.target = "_blank";

  const igLogo = document.createElement("img");
  igLogo.src = instagramLogo;
  instagram.appendChild(igLogo);

  mediaApps.appendChild(facebook);
  mediaApps.appendChild(instagram);

  footer.appendChild(mediaApps);
  return footer;
}

export { menuPage };
