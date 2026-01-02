const logo = "/assets/images/resources/logo-1.png";
const social = [
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/yellowribbon.travels?igsh=ZDFsbGlubDhiajl4",
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
      content: "+91 91002 28152",
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
      mapLink: "https://maps.app.goo.gl/2ppNdLWgYBscFnTM6",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "/our-story", title: "Our Story" },
    { id: 3, link: "/team", title: "Our Team" },
    { id: 4, link: "/tours", title: "Tours" },
    { id: 5, link: "/contact", title: "Contact Us" },
  ],
  explore: [
    { id: 1, link: "/destinations", title: "Destinations" },
    { id: 2, link: "/gallery", title: "Gallery" },
    { id: 3, link: "/reviews", title: "Reviews" },
    { id: 4, link: "/team", title: "Our Team" },
  ],
};

export default footerData;
