const navigations = [
  {
    icon: "dress",
    title: "Birthday",
    href: "/fashion",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "For Couples",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "For Her",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "For Him",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "For Parents",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
        {
          title: "Gifts - By Choice",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "All Anniversary Gifts",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Cakes",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Chocolate",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flowers",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Gifts",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Combos",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "Explore More",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Premium Gifts",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Imported Flowers",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Guitrarist",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Gift Mall",
              href: "/product/search/Casual",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flowers N Cakes",
              href: "/product/search/Casual",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Home Decor",
              href: "/product/search/Casual",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        // {
        //   title: "Bags",
        //   href: "/product/search/bags",
        //   subCategories: [
        //     {
        //       title: "Backpack",
        //       href: "/product/search/backpack",
        //       imgUrl: "/assets/images/products/categories/backpack.png",
        //     },
        //     {
        //       title: "Crossbody Bags",
        //       href: "/product/search/Crossbody Bags",
        //       imgUrl: "/assets/images/products/categories/bag.png",
        //     },
        //     {
        //       title: "Side Bags",
        //       href: "/product/search/Side Bags",
        //       imgUrl: "/assets/images/products/categories/mini-bag.png",
        //     },
        //     {
        //       title: "Slides",
        //       href: "/product/search/Slides",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Woman Clothes",
        //   href: "/product/search/woman-clothes",
        //   subCategories: [
        //     {
        //       title: "Shirt",
        //       href: "/product/search/shirt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "T- shirt",
        //       href: "/product/search/t-shirt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Pant",
        //       href: "/product/search/pant",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Underwear",
        //       href: "/product/search/underwear",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Accessories",
        //   href: "/product/search/accessories",
        //   subCategories: [
        //     {
        //       title: "Belt",
        //       href: "/product/search/belt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Hat",
        //       href: "/product/search/Hat",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Watches",
        //       href: "/product/search/Watches",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Sunglasses",
        //       href: "/product/search/Sunglasses",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Shoes",
        //   href: "/product/search/shoes",
        //   subCategories: [
        //     {
        //       title: "Sneakers",
        //       href: "/product/search/Sneakers",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Sandals",
        //       href: "/product/search/Sandals",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Formal",
        //       href: "/product/search/Formal",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Casual",
        //       href: "/product/search/Casual",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Bags",
        //   href: "/product/search/bags",
        //   subCategories: [
        //     {
        //       title: "Backpack",
        //       href: "/product/search/backpack",
        //       imgUrl: "/assets/images/products/categories/backpack.png",
        //     },
        //     {
        //       title: "Crossbody Bags",
        //       href: "/product/search/Crossbody Bags",
        //       imgUrl: "/assets/images/products/categories/bag.png",
        //     },
        //     {
        //       title: "Side Bags",
        //       href: "/product/search/Side Bags",
        //       imgUrl: "/assets/images/products/categories/mini-bag.png",
        //     },
        //     {
        //       title: "Slides",
        //       href: "/product/search/Slides",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
      ],
      rightImage: {
        imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
        href: "/sale-page-1",
      },
    },
  },
  {
    icon: "laptop",
    title: "Anniversary",
    href: "/product/search/electronics",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "By Recipients",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "For Couples",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "For Her",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "For Him",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "For Parents",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "Gifts By Choice",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "All Anniversary Gifts",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Cakes",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Chocolate",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flowers",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Gifts",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Combos",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "Explore More",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Premium Gifts",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Imported Flowers",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Guitrarist",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Gift Mall",
              href: "/product/search/Casual",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flowers N Cakes",
              href: "/product/search/Casual",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Home Decor",
              href: "/product/search/Casual",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        // {
        //   title: "Bags",
        //   href: "/product/search/bags",
        //   subCategories: [
        //     {
        //       title: "Backpack",
        //       href: "/product/search/backpack",
        //       imgUrl: "/assets/images/products/categories/backpack.png",
        //     },
        //     {
        //       title: "Crossbody Bags",
        //       href: "/product/search/Crossbody Bags",
        //       imgUrl: "/assets/images/products/categories/bag.png",
        //     },
        //     {
        //       title: "Side Bags",
        //       href: "/product/search/Side Bags",
        //       imgUrl: "/assets/images/products/categories/mini-bag.png",
        //     },
        //     {
        //       title: "Slides",
        //       href: "/product/search/Slides",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Woman Clothes",
        //   href: "/product/search/woman-clothes",
        //   subCategories: [
        //     {
        //       title: "Shirt",
        //       href: "/product/search/shirt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "T- shirt",
        //       href: "/product/search/t-shirt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Pant",
        //       href: "/product/search/pant",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Underwear",
        //       href: "/product/search/underwear",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Accessories",
        //   href: "/product/search/accessories",
        //   subCategories: [
        //     {
        //       title: "Belt",
        //       href: "/product/search/belt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Hat",
        //       href: "/product/search/Hat",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Watches",
        //       href: "/product/search/Watches",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Sunglasses",
        //       href: "/product/search/Sunglasses",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Shoes",
        //   href: "/product/search/shoes",
        //   subCategories: [
        //     {
        //       title: "Sneakers",
        //       href: "/product/search/Sneakers",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Sandals",
        //       href: "/product/search/Sandals",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Formal",
        //       href: "/product/search/Formal",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Casual",
        //       href: "/product/search/Casual",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Bags",
        //   href: "/product/search/bags",
        //   subCategories: [
        //     {
        //       title: "Backpack",
        //       href: "/product/search/backpack",
        //       imgUrl: "/assets/images/products/categories/backpack.png",
        //     },
        //     {
        //       title: "Crossbody Bags",
        //       href: "/product/search/Crossbody Bags",
        //       imgUrl: "/assets/images/products/categories/bag.png",
        //     },
        //     {
        //       title: "Side Bags",
        //       href: "/product/search/Side Bags",
        //       imgUrl: "/assets/images/products/categories/mini-bag.png",
        //     },
        //     {
        //       title: "Slides",
        //       href: "/product/search/Slides",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
      ],
      bottomImage: {
        imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/left-banner-755_25jul_2.jpg",
        href: "/",
      },
    },
  },
  {
    icon: "laptop",
    title: "Cakes",
    href: "/product/search/electronics",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "By Types",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "All Cakes",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Photo Cakes",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Designer Cakes",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Eggless Cakes",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Fondant Cakes",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Dry Cakes",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
        {
          title: "By Flavours",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Truffle Cakes",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Chocolate Cakes",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Black Forest Cakes",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Butterscotch Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Pineapple Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Red Velvet Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Vanilla Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "Explore More",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Flowers N Cakes",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Same Day Delivery",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Midnight Delivery",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
        // {
        //   title: "Bags",
        //   href: "/product/search/bags",
        //   subCategories: [
        //     {
        //       title: "Backpack",
        //       href: "/product/search/backpack",
        //       imgUrl: "/assets/images/products/categories/backpack.png",
        //     },
        //     {
        //       title: "Crossbody Bags",
        //       href: "/product/search/Crossbody Bags",
        //       imgUrl: "/assets/images/products/categories/bag.png",
        //     },
        //     {
        //       title: "Side Bags",
        //       href: "/product/search/Side Bags",
        //       imgUrl: "/assets/images/products/categories/mini-bag.png",
        //     },
        //     {
        //       title: "Slides",
        //       href: "/product/search/Slides",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Woman Clothes",
        //   href: "/product/search/woman-clothes",
        //   subCategories: [
        //     {
        //       title: "Shirt",
        //       href: "/product/search/shirt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "T- shirt",
        //       href: "/product/search/t-shirt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Pant",
        //       href: "/product/search/pant",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Underwear",
        //       href: "/product/search/underwear",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Accessories",
        //   href: "/product/search/accessories",
        //   subCategories: [
        //     {
        //       title: "Belt",
        //       href: "/product/search/belt",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Hat",
        //       href: "/product/search/Hat",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Watches",
        //       href: "/product/search/Watches",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Sunglasses",
        //       href: "/product/search/Sunglasses",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Shoes",
        //   href: "/product/search/shoes",
        //   subCategories: [
        //     {
        //       title: "Sneakers",
        //       href: "/product/search/Sneakers",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Sandals",
        //       href: "/product/search/Sandals",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Formal",
        //       href: "/product/search/Formal",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //     {
        //       title: "Casual",
        //       href: "/product/search/Casual",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
        // {
        //   title: "Bags",
        //   href: "/product/search/bags",
        //   subCategories: [
        //     {
        //       title: "Backpack",
        //       href: "/product/search/backpack",
        //       imgUrl: "/assets/images/products/categories/backpack.png",
        //     },
        //     {
        //       title: "Crossbody Bags",
        //       href: "/product/search/Crossbody Bags",
        //       imgUrl: "/assets/images/products/categories/bag.png",
        //     },
        //     {
        //       title: "Side Bags",
        //       href: "/product/search/Side Bags",
        //       imgUrl: "/assets/images/products/categories/mini-bag.png",
        //     },
        //     {
        //       title: "Slides",
        //       href: "/product/search/Slides",
        //       imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
        //     },
        //   ],
        // },
      ],
      rightImage: {
        imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
        href: "/sale-page-1",
      },
    },
  },
  {
    icon: "plant-pot",
    title: "Flowers",
    href: "/product/search/home&garden",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "By Types",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "Roses",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Lilies",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Orchids",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Carnations",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Gerberas",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Mixed Flowers",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Premium Flowers",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "By Occasions",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Birthday",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Anniversary",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Love N Romance",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Congratulations",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Wedding",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Sympathy N Funeral",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "By Collections",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Flower Bouquets",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flower in Box",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flower in Sleeves",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flagship Collection",
              href: "/product/search/Casual",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "Explore More",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "Flowers N Chocolate",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "Flowers N Cakes",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "Same-day Flowers Delivery",
              href: "/product/search/Side Bags",
              imgUrl: "/assets/images/products/categories/mini-bag.png",
            }
          ],
        },
      ],
    },
  },
  {
    icon: "plant-pot",
    title: "Personalised",
    href: "/product/search/home&garden",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "By Types",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "All Personalised Gifts",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Mugs N Cushions",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Stationary",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Water Bottles",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Home Decor",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Gadgets",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Fashion Accessories",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
        {
          title: "By Occasions",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Birthday",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Anniversary",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Wedding",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "By Features",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Personalised Caricatures",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Engraved",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Premium Personalised Gifts",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
      ],
      // rightImage: {
      //   imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
      //   href: "/sale-page-1",
      // },
    },
  },
  {
    icon: "plant-pot",
    title: "Plants",
    href: "/product/search/home&garden",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "By Types",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "Air Purifying Plants",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Low Maintenance Plants",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Indoor Plants",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flowering Plants",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Terrarium Plants",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Succulents & Cactus",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Bonsai Plants",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
        {
          title: "By Name",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Money Plants",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Lucky Bamboo",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Snake Plants",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Jade Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Syngonium Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Ficus Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Plant Sets",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "By Occasions",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Birthday",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Anniversary",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "House Warming",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Good Luck",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
        {
          title: "By Planters",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Ceramic Planters",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Metals Planters",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Glass Planters",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Plastic Planters",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
      ],
      rightImage: {
        imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
        href: "/sale-page-1",
      },
    },
  },
  {
    icon: "plant-pot",
    title: "Combos & Hampers",
    href: "/product/search/home&garden",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Flower Combos",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "Flowers N Cakes",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flowers N Chocolates",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Flowers N Guitarist",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
          ],
        },
        {
          title: "Cake Combos",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Cake N Chocolates",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Cake N Plants",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Cakes N Personalised Gifts",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            }
          ],
        },
        {
          title: "Other Combos",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "All Combos",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Personalised Combos",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Gift Hampers",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Gifts N Guitarist",
              href: "/product/search/Formal",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
      ],
      rightImage: {
        imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
        href: "/sale-page-1",
      },
    },
  },
  {
    icon: "plant-pot",
    title: "More Gifts",
    href: "/product/search/home&garden",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Gift - By Category",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "Gift Mall - All",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Cosmetic and Spa Hampers",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Toys N Games",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Handbags N Wallets",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Accessories",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Perfumes and Fragrances",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Jewellery N Accessories",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Electronic and Accessories",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Greeting Cards",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
        {
          title: "Gifts N Experiences",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Surprises N Decoration",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Balloon Decoration",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Balloon Bouquet",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Party Supplies",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Gifts N Guitarist",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            }
          ],
        },
        {
          title: "Romantic Experience",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Candlelight Dinner",
              href: "/product/search/Sneakers",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Romantic Getaway",
              href: "/product/search/Sandals",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            }
          ],
        },
        {
          title: " Digital Gifts",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "All Digital Gifts",
              href: "#!",
              imgUrl: ''
            },
            {
              title: "Celebrity Video Message",
              href: "#!",
              imgUrl: ''
            },
            {
              title: "Guitarist On Call",
              href: "#!",
              imgUrl: ''
            },
          ]
        }
      ],
      // rightImage: {
      //   imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
      //   href: "/sale-page-1",
      // },
    },
  },
  {
    icon: "plant-pot",
    title: "Occasions",
    href: "/product/search/home&garden",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Upcoming Occasions",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "Parent's Day - 24th July",
              href: "/product/search/shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Friendship Day - 7th Aug",
              href: "/product/search/t-shirt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Raksha Bandhan - 11th Aug",
              href: "/product/search/pant",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Janmashtami - 19th Aug",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Teacher's Day - 5th Sept",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Ganesh Chaturthi - 10th Sept	",
              href: "/product/search/underwear",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
        {
          title: "EVERYDAY",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Wedding",
              href: "/product/search/belt",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "House Warming	",
              href: "/product/search/Hat",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "New Baby	",
              href: "/product/search/Watches",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            }
          ],
        },
        {
          title: "EMOTIONS/SENTIMENTS",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Get Well Soon",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Sympathy N Funeral",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },
            {
              title: "Vanilla Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/plants/Air-Purifying-Plants-6-aug-2021.jpg",
            },

          ],
        },
      ],
      // rightImage: {
      //   imgUrl: "https://www.fnp.com/assets/images/custom/new-desk-home/combos/Plant_2apr.jpg",
      //   href: "/sale-page-1",
      // },
    },
  },
  // {
  //   icon: "car",
  //   title: "Automotive",
  //   href: "/product/search/automotive",
  //   menuComponent: "MegaMenu1",
  // },
];

export default navigations;
