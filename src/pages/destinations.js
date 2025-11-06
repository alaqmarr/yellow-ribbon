import DestinationsPage from "@/components/DestinationsPage/DestinationsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import axios from "axios";
import React from "react";

const Destinations = ({ destinations }) => {
  return (
    <Layout pageTitle="Destinations">
      <PageHeader title="Destinations" />
      <DestinationsPage data={destinations}/>
    </Layout>
  );
};

export async function getStaticProps() {
  const destinations = await axios.get("https://api.yellowribbontravels.com/api/destinations");

  return {
    props: { destinations: destinations.data },
    revalidate: 60, // optional: ISR every 1 minute
  };
}
export default Destinations;
