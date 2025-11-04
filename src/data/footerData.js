const logo = "/assets/images/resources/logo-1.png";
const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "YRT",
  about:
    "Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.",
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
    { id: 2, link: "#", title: "Community Blog" },
    { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 2, link: "/return-policy", title: "Returns" },
    { id: 3, link: "/refund-cancellations", title: "Refunds" },
    { id: 4, link: "/terms-conditions", title: "Terms and Conditions" },
    { id: 5, link: "/privacy-policy", title: "Privacy Policy" },
  ],
};

export default footerData;
