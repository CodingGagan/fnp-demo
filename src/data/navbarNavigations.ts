const navbarNavigations = [
  {
    title: "Home",
    child: [
      {
        title: "Super Store",
        url: "/",
      },
    ],
  },

  {
    title: "User Account",
    child: [
      {
        title: "Orders",
        child: [
          {
            title: "Order List",
            url: "/orders",
          },
          {
            title: "Order Details",
            url: "/orders/5452423",
          },
        ],
      },
      {
        title: "Profile",
        child: [
          {
            title: "View Profile",
            url: "/profile",
          },
          {
            title: "Edit Profile",
            url: "/profile/edit",
          },
        ],
      },
      {
        title: "Address",
        child: [
          {
            title: "Address List",
            url: "/address",
          },
          {
            title: "Add Address",
            url: "/address/512474",
          },
        ],
      },
      {
        title: "Support tickets",
        child: [
          {
            title: "All tickets",
            url: "/support-tickets",
          },
          {
            title: "Ticket details",
            url: "/support-tickets/512474",
          },
        ],
      },
      {
        title: "Wishlist",
        url: "/wish-list",
      },
    ],
  },
  {
    title: "Vendor Account",
    child: [
      {
        title: "Dashboard",
        url: "/vendor/dashboard",
      },
      {
        title: "Products",

        child: [
          {
            title: "All products",
            url: "/vendor/products",
          },
          {
            title: "Add/Edit product",
            url: "/vendor/products/248104",
          },
        ],
      },
      {
        title: "Orders",
        child: [
          {
            title: "All orders",
            url: "/vendor/orders",
          },
          {
            title: "Order details",
            url: "/vendor/orders/248104",
          },
        ],
      },
      {
        title: "Profile",
        url: "/vendor/account-settings",
      },
    ],
  },
  {
    title: "Track My Orders",
    url: "/orders",
  },
  // {
  //   title: "Back to Demos",
  //   url: "/landing",
  // },
  // {
  //   title: "Documentation",
  //   url:
  //     "https://docs.google.com/document/d/13Bnyugzcty75hzi9GdbVh01YV75a7AhViZws0qGf5yo/edit?usp=sharing",
  //   extLink: true,
  // },
];

export default navbarNavigations;
