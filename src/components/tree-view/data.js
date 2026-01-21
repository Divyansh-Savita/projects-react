const menuData = [
  {
    id: 1,
    label: "Home",
    link: "/"
  },
  {
    id: 2,
    label: "Products",
    children: [
      {
        id: 3,
        label: "Electronics",
        children: [
          { id: 4, label: "Mobiles", link: "/products/mobiles" },
          { id: 5, label: "Laptops", link: "/products/laptops" }
        ]
      },
      {
        id: 6,
        label: "Clothing",
        children: [
          { id: 7, label: "Men", link: "/products/men" },
          { id: 8, label: "Women", link: "/products/women" }
        ]
      }
    ]
  },
  {
    id: 9,
    label: "About",
    link: "/about"
  }
];
export default menuData;