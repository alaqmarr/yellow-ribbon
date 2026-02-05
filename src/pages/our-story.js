import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

const teamStory = {
  intro: {
    title: "Yellow Ribbon Travels: A Journey of Love, Dreams & Discovery",
    subtitle:
      "Some travel brands are built on business plans. Yellow Ribbon Travels was built on love, adventure, and a shared dream to explore the world together.",
    description:
      "What started as a chance meeting in 2016 became a lifelong journey across continents — and eventually, a travel agency that now helps hundreds of travellers create their own beautiful stories.",
  },
  howItBegan: {
    title: "How It All Began",
    content: `Yusuf and Rukaiya met through a common friend in 2016. Rukaiya, with her strong background in the travel and aviation industry (IndiGo, Jet Airways, VFS, and a leading travel agency), always had a passion for the world beyond borders. Yusuf brought vision, entrepreneurship, and unwavering support.

On their wedding day in July 2017, Yusuf surprised Rukaiya with the proprietorship of Yellow Ribbon Travels, gifting her not just a company — but the wings to fly.

During her final year of B.A. Travel & Tourism, Rukaiya's project on "Wonder Tourism" — crafting itineraries around the Wonders of the World — sowed the seeds of what Yellow Ribbon Travels would later become.

Their first destination after marriage? Egypt — and that's where their story truly took flight.`,
  },
  timeline: [
    {
      year: "2017",
      destination: "Egypt (Cairo & Sharm El Sheikh)",
      description:
        "Where it all began. Their first international adventure took them to the Great Pyramids of Giza, the Nile, and the vibrant Red Sea. They pioneered the Cairo + Sharm itinerary, which became one of their signature travel combinations.",
    },
    {
      year: "2019",
      destination: "Munnar, Alleppey & Yercaud",
      description:
        "Romance in the hills and on the water. Mist-kissed tea plantations of Munnar, serene houseboat cruises in Alleppey, and peaceful escapes to Yercaud became the blueprint for their honeymoon and couple itineraries within India.",
    },
    {
      year: "2020",
      destination: "Goa – Girls Trip",
      description:
        "Sun, sand & parasailing adventures. Rukaiya's girls' trip to Goa was all about fun, beach walks, and thrilling parasailing. This journey became the inspiration for their adventure-filled yet relaxing Goa packages.",
    },
    {
      year: "2021",
      destination: "Delhi – Manali – Himachal Circuit",
      description:
        "Roads, tunnels, and snow-capped dreams. From Delhi to Manali, they journeyed through the Atal Tunnel, stayed at Manu Aliya, and indulged in heritage luxury. This trip shaped their Himalayan Road trip itineraries.",
    },
    {
      year: "2022",
      destination: "Vizag & Abu Dhabi",
      description:
        "From the Bay of Bengal to the Sheikh Zayed Mosque and Ferrari World. These journeys inspired coastal retreats and luxury family itineraries.",
    },
    {
      year: "2022-2025",
      destination: "Saudi Arabia (Umrah & Hajj)",
      description:
        "A spiritual journey of faith and gratitude. Their visits to Mecca for both Umrah and Hajj became the foundation for their faith-based travel experiences.",
    },
    {
      year: "2023",
      destination: "Maldives & Iraq",
      description:
        "Barefoot luxury in the Maldives and cultural exploration in Iraq. These journeys inspired luxury honeymoon escapes and deep-cultural spiritual tours.",
    },
    {
      year: "2024",
      destination: "Thailand, Cordelia Cruise, Kabini, Mauritius",
      description:
        "Adventure, wildlife, cruises, and ziplining through paradise. These trips inspired group adventure packages, cruise itineraries, eco-tourism, and luxury experiences.",
    },
    {
      year: "2025",
      destination: "Masai Mara & Ladakh",
      description:
        "A brush with the wild in Africa and soulful landscapes of Ladakh. These journeys inspired luxury wildlife safari and offbeat adventure itineraries.",
    },
  ],
  whyBook: [
    "Itineraries Inspired by Real Experiences",
    "Expertise in Domestic & International Travel",
    "Offbeat Routes + Signature Packages",
    "Personalized Support & Guidance",
    "Available 24/7 — because travel never sleeps",
    "A passionate team that travels, explores, and creates with love",
  ],
  quote: {
    text: `"Travel has been our biggest teacher, our source of joy, and the foundation of our dreams. With Yellow Ribbon Travels, we don't just plan holidays — we craft experiences that stay with you forever. From pyramids to parasailing, from safaris to spiritual sojourns, we've lived these moments — and now, we'd love to make them yours too."`,
    authors: "— Yusuf & Rukaiya",
  },
  teamMembers: [
    {
      name: "Rukaiya",
      image: "/rukaiya.jpeg",
      role: "Founder & Travel Expert",
      description:
        "With a B.A. in Travel & Tourism and hands-on experience at IndiGo, Jet Airways, VFS, and leading travel agencies, Rukaiya brings unmatched expertise to every itinerary. Her passion for crafting unique travel experiences is the heart of Yellow Ribbon Travels.",
      instagram:
        "https://www.instagram.com/yellowribbon.travels?igsh=ZDFsbGlubDhiajl4",
    },
    {
      name: "Yusuf",
      image: "/yusuf.jpeg",
      role: "Co-Founder & Entrepreneur",
      description:
        "The visionary behind Yellow Ribbon Travels, Yusuf brings entrepreneurial spirit and unwavering support. He surprised Rukaiya with the business on their wedding day, turning a shared dream into reality.",
      instagram:
        "https://www.instagram.com/yellowribbon.travels?igsh=ZDFsbGlubDhiajl4",
    },
  ],
};

const OurTeam = () => {
  return (
    <Layout pageTitle="Our Story">
      <PageHeader title="Our Story" page="Our Story" />

      {/* Hero Intro Section - Yellow */}
      <section className="our-story-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h1
                style={{
                  fontSize: "42px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "var(--thm-black)",
                }}
              >
                {teamStory.intro.title}
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  color: "#1a1a1a",
                  marginBottom: "15px",
                  fontWeight: "500",
                }}
              >
                {teamStory.intro.subtitle}
              </p>
              <p style={{ fontSize: "16px", color: "#333" }}>
                {teamStory.intro.description}
              </p>
              {/* BNI Badge */}
              <div style={{ marginTop: "30px" }}>
                <Image
                  src="/assets/images/resources/bni-logo.png"
                  alt="BNI Member"
                  style={{ height: "60px", width: "auto" }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    marginTop: "10px",
                  }}
                >
                  Proud BNI Member
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Began */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "80px 0" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "25px",
                  color: "var(--thm-black)",
                }}
              >
                {teamStory.howItBegan.title}
              </h2>
              {teamStory.howItBegan.content.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "var(--thm-gray)",
                    marginBottom: "20px",
                  }}
                >
                  {para}
                </p>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Travel Timeline */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div
            className="section-title text-center"
            style={{ marginBottom: "50px" }}
          >
            <span className="section-title__tagline">Our Journey</span>
            <h2 className="section-title__title">
              The Travel Timeline: 2017 – 2025
            </h2>
          </div>
          <Row>
            {teamStory.timeline.map((item, index) => (
              <Col md={6} lg={4} key={index} style={{ marginBottom: "30px" }}>
                <div className="our-story-timeline-card">
                  <span className="our-story-year-badge">{item.year}</span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "15px",
                      color: "var(--thm-black)",
                    }}
                  >
                    {item.destination}
                  </h4>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--thm-gray)",
                      lineHeight: "1.7",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Book With Us */}
      <section className="our-story-why-book">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2
                style={{
                  color: "#fff",
                  fontSize: "32px",
                  marginBottom: "40px",
                }}
              >
                Why Book with Yellow Ribbon Travels?
              </h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {teamStory.whyBook.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="fa fa-check"
                      style={{
                        color: "var(--thm-primary)",
                        marginRight: "10px",
                      }}
                    ></i>
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quote Section - Yellow */}
      <section className="our-story-quote">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h3 style={{ fontWeight: "600", marginBottom: "20px" }}>
                A Note from Yusuf & Rukaiya
              </h3>
              <blockquote
                style={{
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "var(--thm-gray)",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                {teamStory.quote.text}
              </blockquote>
              <p style={{ fontWeight: "600", color: "var(--thm-primary)" }}>
                {teamStory.quote.authors}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Meet The Team Section */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div
            className="section-title text-center"
            style={{ marginBottom: "50px" }}
          >
            <span className="section-title__tagline">Our Team</span>
            <h2 className="section-title__title">Meet the Founders</h2>
          </div>
          <Row className="justify-content-center">
            {teamStory.teamMembers.map((member, index) => (
              <Col md={6} lg={5} key={index} style={{ marginBottom: "30px" }}>
                <div className="our-story-team-card">
                  <div className="our-story-team-avatar">
                    <Image
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "5px",
                    }}
                  >
                    {member.name}
                  </h4>
                  <p
                    style={{
                      color: "var(--thm-primary)",
                      fontWeight: "500",
                      marginBottom: "15px",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      color: "var(--thm-gray)",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                    }}
                  >
                    {member.description}
                  </p>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--thm-primary)", fontSize: "24px" }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "60px 0" }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 style={{ marginBottom: "20px" }}>Start Your Journey Today</h2>
              <p style={{ marginBottom: "30px", color: "var(--thm-gray)" }}>
                Your dream destination is just a conversation away.
              </p>
              <a
                href="https://wa.me/919100228152?text=Hi,%20Yellow%20Ribbon%20Travels!"
                className="thm-btn"
              >
                Contact Us
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default OurTeam;
