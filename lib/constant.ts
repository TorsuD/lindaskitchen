export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || `Linda's kitchen`;
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  `Homemade Ghanaian food, made for you`;

export const navItems = [
  {
    id: 110,
    name: "About",
    href: "/about",
  },
  {
    id: 111,
    name: "Menu",
    href: "/menu",
  },
  {
    id: 112,
    name: "Contact",
    href: "/contact",
  },
];

export const navItemsMobileView = [
  {
    id: 201,
    name: "Home",
    href: "/home",
  },
  {
    id: 210,
    name: "About",
    href: "/about",
  },
  {
    id: 211,
    name: "Menu",
    href: "/menu",
  },
  {
    id: 212,
    name: "Contact Us",
    href: "/contact",
  },
  {
    id: 213,
    name: "Order",
    href: "/order",
  },
];

export const stepsToOrder = [
  {
    id: 1,
    title: "Check our menu.",
  },

  {
    id: 2,
    title: "Call to place your order.",
  },

  {
    id: 3,
    title: "Pick up on Saturday & enjoy.",
  },
];
