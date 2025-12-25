const logo = "/assets/images/resources/logo-1.png";
const social = [
  {
    icon: "fa-twitter",
    link: "https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!",
  },
  {
    icon: "fa-facebook-square",
    link: "https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!",
  },
  {
    icon: "fa-pinterest-p",
    link: "https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!",
  },
  {
    icon: "fa-instagram",
    link: "https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!",
  },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "YRT",
  about:
    "Yellow Ribbon Travels is your trusted partner for flight tickets, visa assistance, and customized holiday packages. We ensure seamless travel experiences tailored to your needs.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+91 97899 05294",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "yellowribbontravels@gmail.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Hyderabad, Telangana, India",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    {
      id: 2,
      link: "/blogs",
      title: "Blogs",
    },
    {
      id: 3,
      link: "/tours",
      title: "Tours",
    },
    {
      id: 4,
      link: "/contact",
      title: "Contact Us",
    },
    {
      id: 5,
      link: "/gallery",
      title: "Gallery",
    },
  ],
  explore: [
    { id: 2, link: "/destinations", title: "Destinations" },
    { id: 3, link: "/about", title: "About Us" },
    { id: 4, link: "/contact", title: "Contact Us" },
    { id: 5, link: "/gallery", title: "Gallery" },
  ],
};

export default footerData;
