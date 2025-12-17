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
      link: "https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!",
      title: "Community Blog",
    },
    {
      id: 3,
      link: "https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!",
      title: "Rewards",
    },
    {
      id: 4,
      link: "https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!",
      title: "Work with Us",
    },
    {
      id: 5,
      link: "https://wa.me/919789905294?text=Hi,%20Yellow%20Ribbon%20Travels!",
      title: "Meet the Team",
    },
  ],
  explore: [
    { id: 2, link: "/return-policy", title: "Returns" },
    { id: 3, link: "/refund-cancellations", title: "Refunds" },
    { id: 4, link: "/terms-conditions", title: "Terms and Conditions" },
    { id: 5, link: "/privacy-policy", title: "Privacy Policy" },
  ],
};

export default footerData;
