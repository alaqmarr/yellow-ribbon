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
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Welcome">
      <MainSlider />
      <CounterOne />
      <DestinationsOne />
      <AboutOne />
      <PopularTours />
      {/* <VideoOne /> */}
      <DestinationsTwo />
      <BrandOne />
      <TestimonialOne />
      <GalleryOne />
      <WhyChoose />
      <NewsOne />
    </Layout>
  );
};

export default Home;
