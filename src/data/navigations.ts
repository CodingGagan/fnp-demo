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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "For Him",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "For Parents",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Cakes",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Chocolate",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Flowers",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Personalised Gifts",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Combos",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Imported Flowers",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Guitrarist",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Gift Mall",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Flowers N Cakes",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Home Decor",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
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
        //       imgUrl: "/assets/images/products/categories/shirt.png",
        //     },
        //     {
        //       title: "T- shirt",
        //       href: "/product/search/t-shirt",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
        //     },
        //     {
        //       title: "Pant",
        //       href: "/product/search/pant",
        //       imgUrl: "/assets/images/products/categories/pant.png",
        //     },
        //     {
        //       title: "Underwear",
        //       href: "/product/search/underwear",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
        //     },
        //     {
        //       title: "Hat",
        //       href: "/product/search/Hat",
        //       imgUrl: "/assets/images/products/categories/hat.png",
        //     },
        //     {
        //       title: "Watches",
        //       href: "/product/search/Watches",
        //       imgUrl: "/assets/images/products/categories/watch.png",
        //     },
        //     {
        //       title: "Sunglasses",
        //       href: "/product/search/Sunglasses",
        //       imgUrl: "/assets/images/products/categories/sunglass.png",
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
        //       imgUrl: "/assets/images/products/categories/sneaker.png",
        //     },
        //     {
        //       title: "Sandals",
        //       href: "/product/search/Sandals",
        //       imgUrl: "/assets/images/products/categories/sandal.png",
        //     },
        //     {
        //       title: "Formal",
        //       href: "/product/search/Formal",
        //       imgUrl: "/assets/images/products/categories/shirt.png",
        //     },
        //     {
        //       title: "Casual",
        //       href: "/product/search/Casual",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
        //     },
        //   ],
        // },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/offer-1.png",
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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "For Her",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "For Him",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "For Parents",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Cakes",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Chocolate",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Flowers",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Personalised Gifts",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Combos",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Imported Flowers",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Guitrarist",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Gift Mall",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Flowers N Cakes",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Home Decor",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
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
        //       imgUrl: "/assets/images/products/categories/shirt.png",
        //     },
        //     {
        //       title: "T- shirt",
        //       href: "/product/search/t-shirt",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
        //     },
        //     {
        //       title: "Pant",
        //       href: "/product/search/pant",
        //       imgUrl: "/assets/images/products/categories/pant.png",
        //     },
        //     {
        //       title: "Underwear",
        //       href: "/product/search/underwear",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
        //     },
        //     {
        //       title: "Hat",
        //       href: "/product/search/Hat",
        //       imgUrl: "/assets/images/products/categories/hat.png",
        //     },
        //     {
        //       title: "Watches",
        //       href: "/product/search/Watches",
        //       imgUrl: "/assets/images/products/categories/watch.png",
        //     },
        //     {
        //       title: "Sunglasses",
        //       href: "/product/search/Sunglasses",
        //       imgUrl: "/assets/images/products/categories/sunglass.png",
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
        //       imgUrl: "/assets/images/products/categories/sneaker.png",
        //     },
        //     {
        //       title: "Sandals",
        //       href: "/product/search/Sandals",
        //       imgUrl: "/assets/images/products/categories/sandal.png",
        //     },
        //     {
        //       title: "Formal",
        //       href: "/product/search/Formal",
        //       imgUrl: "/assets/images/products/categories/shirt.png",
        //     },
        //     {
        //       title: "Casual",
        //       href: "/product/search/Casual",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
        //     },
        //   ],
        // },
      ],
      bottomImage: {
        imgUrl: "/assets/images/promotion/offer-5.png",
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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Photo Cakes",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Designer Cakes",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Eggless Cakes",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Fondant Cakes",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Dry Cakes",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Chocolate Cakes",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Black Forest Cakes",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Butterscotch Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Pineapple Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Red Velvet Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Vanilla Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Same Day Delivery",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Midnight Delivery",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
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
        //       imgUrl: "/assets/images/products/categories/shirt.png",
        //     },
        //     {
        //       title: "T- shirt",
        //       href: "/product/search/t-shirt",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
        //     },
        //     {
        //       title: "Pant",
        //       href: "/product/search/pant",
        //       imgUrl: "/assets/images/products/categories/pant.png",
        //     },
        //     {
        //       title: "Underwear",
        //       href: "/product/search/underwear",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
        //     },
        //     {
        //       title: "Hat",
        //       href: "/product/search/Hat",
        //       imgUrl: "/assets/images/products/categories/hat.png",
        //     },
        //     {
        //       title: "Watches",
        //       href: "/product/search/Watches",
        //       imgUrl: "/assets/images/products/categories/watch.png",
        //     },
        //     {
        //       title: "Sunglasses",
        //       href: "/product/search/Sunglasses",
        //       imgUrl: "/assets/images/products/categories/sunglass.png",
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
        //       imgUrl: "/assets/images/products/categories/sneaker.png",
        //     },
        //     {
        //       title: "Sandals",
        //       href: "/product/search/Sandals",
        //       imgUrl: "/assets/images/products/categories/sandal.png",
        //     },
        //     {
        //       title: "Formal",
        //       href: "/product/search/Formal",
        //       imgUrl: "/assets/images/products/categories/shirt.png",
        //     },
        //     {
        //       title: "Casual",
        //       href: "/product/search/Casual",
        //       imgUrl: "/assets/images/products/categories/t-shirt.png",
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
        //       imgUrl: "/assets/images/products/categories/belt.png",
        //     },
        //   ],
        // },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/offer-1.png",
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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Lilies",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Orchids",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Carnations",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Gerberas",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Mixed Flowers",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Premium Flowers",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Anniversary",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Love N Romance",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Congratulations",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Wedding",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Sympathy N Funeral",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Flower in Box",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Flower in Sleeves",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Flagship Collection",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Personalised Mugs N Cushions",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Personalised Stationary",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Personalised Water Bottles",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Personalised Home Decor",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Personalised Gadgets",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Personalised Fashion Accessories",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Anniversary",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Wedding",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Personalised Engraved",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Premium Personalised Gifts",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },

          ],
        },
      ],
      // rightImage: {
      //   imgUrl: "/assets/images/promotion/offer-1.png",
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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Low Maintenance Plants",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Indoor Plants",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Flowering Plants",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Terrarium Plants",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Succulents & Cactus",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Bonsai Plants",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Lucky Bamboo",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Snake Plants",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Jade Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Syngonium Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Ficus Plants",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Plant Sets",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Anniversary",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "House Warming",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Good Luck",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Metals Planters",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Glass Planters",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Plastic Planters",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },

          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/offer-1.png",
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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Flowers N Chocolates",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Flowers N Guitarist",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Cake N Plants",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Cakes N Personalised Gifts",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Personalised Combos",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Gift Hampers",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Gifts N Guitarist",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },

          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/offer-1.png",
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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Cosmetic and Spa Hampers",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Toys N Games",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Handbags N Wallets",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Accessories",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Perfumes and Fragrances",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Jewellery N Accessories",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Electronic and Accessories",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Greeting Cards",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Balloon Decoration",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Balloon Bouquet",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Party Supplies",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Gifts N Guitarist",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
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
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Romantic Getaway",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
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
      //   imgUrl: "/assets/images/promotion/offer-1.png",
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
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Friendship Day - 7th Aug",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Raksha Bandhan - 11th Aug",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Janmashtami - 19th Aug",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Teacher's Day - 5th Sept",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Ganesh Chaturthi - 10th Sept	",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
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
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "House Warming	",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "New Baby	",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
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
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Sympathy N Funeral",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
            {
              title: "Vanilla Cakes",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },

          ],
        },
      ],
      // rightImage: {
      //   imgUrl: "/assets/images/promotion/offer-1.png",
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
