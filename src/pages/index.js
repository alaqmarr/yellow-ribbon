import AboutOne from "@/components/AboutOne/AboutOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import CounterOne from "@/components/CounterOne/CounterOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import DestinationsTwo from "@/components/DestinationsTwo/DestinationsTwo";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import PopularTours from "@/components/PopularTours/PopularTours";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import TourSearch from "@/components/TourSearch/TourSearch";
import VideoOne from "@/components/VideoOne/VideoOne";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import axios from "axios";
import React from "react";

const Home = ({ packages, destinations, blogs }) => {
  return (
    <Layout pageTitle="Welcome">
      <MainSlider />
      <CounterOne />
      <DestinationsOne data={destinations} />
      <AboutOne />
      <PopularTours data={packages} />
      {/* <VideoOne /> */}
      <DestinationsTwo />
      <BrandOne />
      <TestimonialOne />
      {/* <GalleryOne /> */}
      <WhyChoose />
      <NewsOne data={blogs} />
    </Layout>
  );
};

export async function getStaticProps() {
  const packages = await axios.get(
    "https://api.yellowribbontravels.com/api/packages"
  );
  const destinations = await axios.get(
    "https://api.yellowribbontravels.com/api/destinations"
  );
  const blogs = await axios.get(
    "https://api.yellowribbontravels.com/api/blogs"
  );

  return {
    props: {
      packages: packages.data,
      destinations: destinations.data,
      blogs: blogs.data,
    },
    revalidate: 120, // optional: ISR every 2 minutes
  };
}
export default Home;
