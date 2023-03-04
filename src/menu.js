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

let appArray = new Appetizers();
appArray.newApp("Garlic Bread", "3 warm breadsticks", "$6");
appArray.newApp("Mussels", "White wine and garlic", "$20");
appArray.newApp("Fried Calamari", "Lemon, served with calimari sauce", "$13");
appArray.newApp("Buffalo Shrimp", "5 shrimp", "$8");

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
  "27"
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

function menuPage() {
  const content = document.querySelector("#content");
  // Add photo of lake header
  content.appendChild(addSeafoodHeader());
  // Add the menu and photos
  content.appendChild(menuSection());

  console.log(appArray.allAppetizers.length);
}

function addSeafoodHeader() {
  const seafoodHeader = document.createElement("div");
  seafoodHeader.classList.add("seafoodheader");
  seafoodHeader.innerHTML = `<img src="../LM-backdrop.jpeg">`;
  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.innerHTML = "MENU";
  seafoodHeader.appendChild(banner);
  return seafoodHeader;
}

function menuSection() {
  const food = document.createElement("div");
  food.classList.add("food");
  let div = document.createElement("div");
  div.innerHTML = `<img src="../fried-calamari.jpeg">`;
  food.appendChild(div);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const foodType = document.createElement("div");
  foodType.classList.add("food-type");

  let title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "APPETIZERS";
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
  foodType.appendChild(title);

  // Appetizers section
  for (let i = 0; i < mainCourseArray.allMainCourses.length; i++) {
    foodType.appendChild(
      addFoodItem(
        mainCourseArray.allMainCourses[i].item,
        mainCourseArray.allMainCourses[i].description,
        mainCourseArray.allMainCourses[i].price
      )
    );
  }

  menuContainer.appendChild(foodType);
  food.appendChild(menuContainer);

  div = document.createElement("div");
  div.innerHTML = `<img src="../garlic-breadsticks.jpeg">`;
  food.appendChild(div);

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

export { menuPage };
