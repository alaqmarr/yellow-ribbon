const logo = "/assets/images/resources/logo-1.png";
const logo2 = "/assets/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 99, // Interjected item
    name: "Flight Booking",
    href: "https://wa.me/919100228152?text=Hi,%20I%20would%20like%20to%20book%20a%20flight!",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: [],
  },
  {
    id: 3,
    name: "Tours",
    href: "/tours",
    subNavItems: [],
  },
  {
    id: 4,
    name: "Gallery",
    href: "/gallery",
    subNavItems: [],
  },
  {
    id: 5,
    name: "About",
    href: "/about",
    subNavItems: [],
  },
  {
    id: 6,
    name: "Our Story",
    href: "/our-story",
    subNavItems: [],
  },
  {
    id: 7,
    name: "Team",
    href: "/team",
    subNavItems: [],
  },
  {
    id: 8,
    name: "Reviews",
    href: "/reviews",
    subNavItems: [],
  },
  {
    id: 10,
    name: "Blogs",
    href: "/blogs",
    subNavItems: [],
  },
  {
    id: 9,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/yellowribbon.travels?igsh=ZDFsbGlubDhiajl4",
  },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+91 91002 28152",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "yellowribbontravels@gmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;

const navItems2 = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
      {
        id: 1,
        name: "Home One",
        href: "/",
      },
      {
        id: 2,
        name: "Home Two",
        href: "/home2",
      },
      {
        id: 3,
        name: "Header Styles",
        href: "/",
        subItems: [
          {
            id: 1,
            name: "Header One",
            href: "",
          },
          { id: 2, name: "Header Two", href: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: [
      { id: 1, name: "Destinations", href: "/destinations" },
      { id: 2, name: "Destinations Detail", href: "/destinations-details" },
    ],
  },
  {
    id: 3,
    name: "Tours",
    href: "/tours",
    subNavItems: [
      { id: 1, name: "Tours", href: "/tours" },
      { id: 2, name: "Tours List", href: "/tours-list" },
      { id: 3, name: "Tours Details", href: "/tour-details" },
    ],
  },
  {
    id: 4,
    name: "Pages",
    href: "",
    subNavItems: [{ id: 1, name: "About", href: "/about" }],
  },
  {
    id: 5,
    name: "News",
    href: "/news",
    subNavItems: [
      { id: 1, name: "News", href: "/news" },
      { id: 2, name: "News Details", href: "/news-details" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social2 = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData2 = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+91 97899 05294",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "yellowribbontravels@gmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social2,
  logo,
  logo2,
};

export { headerData2 };
