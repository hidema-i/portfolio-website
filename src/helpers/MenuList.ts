import Blended from "../assets/blended.jpg";
import American from "../assets/American.jpg";
import Original from "../assets/original.jpg";
import Cappuccino from "../assets/cappuccino.jpg";
import Espresso from "../assets/espresso.jpg";
import Egg from "../assets/egg.jpg";
import Ham from "../assets/hum.jpg";
import Cheeseburger from "../assets/cheeseburger.jpg";
import Icecream from "../assets/icecream.jpg";
import Mix from "../assets/mix.jpg";
import Salad from "../assets/takeout1.jpg";
import Burger from "../assets/takeout2.jpg";

interface MenuItem {
  name: string;
  image: string;
  price: string;
}

export const MenuList: MenuItem[] = [
  {
    name: "Blended coffee",
    image: Blended,
    price: "3.99",
  },
  {
    name: "American coffee",
    image: American,
    price: "4.99",
  },
  {
    name: "Original coffee",
    image: Original,
    price: "3.99",
  },
  {
    name: "Cappuccino",
    image: Cappuccino,
    price: "5.99",
  },
  {
    name: "Espresso",
    image: Espresso,
    price: "4.99",
  },
  {
    name: "Egg sandwich",
    image: Egg,
    price: "3.99",
  },
  {
    name: "Ham sandwich",
    image: Ham,
    price: "4.99",
  },
  {
    name: "Mix sandwich",
    image: Mix,
    price: "3.99",
  },
  {
    name: "Cheeseburger",
    image: Cheeseburger,
    price: "6.99",
  },
  {
    name: "Ice cream",
    image: Icecream,
    price: "3.99",
  },
  {
    name: "Takeout salad",
    image: Salad,
    price: "6.99",
  },
  {
    name: "Takeout burger",
    image: Burger,
    price: "8.99",
  },
];
