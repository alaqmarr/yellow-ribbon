import DestinationsDetailsPage from "@/components/DestinationsDetails/DestinationsDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
export async function getStaticPaths() {
  // Fetch all package IDs from the API
  const res = await fetch(
    "https://api.yellowribbontravels.com/api/destinations"
  );
  const destinations = await res.json();

  const paths = destinations.map((dest) => ({
    params: { id: dest.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", // allows on-demand ISR for new IDs
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.yellowribbontravels.com/api/destinations/${params.id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const destinationsData = await res.json();

  return {
    props: { destinationsData },
    revalidate: 60, // ISR every 1 minute
  };
}
const DestinationsDetails = ({ destinationsData }) => {
  return (
    <Layout pageTitle="Destinations Details">
      <PageHeader title="Destinations Details" page="Destinations" />
      <DestinationsDetailsPage data={destinationsData} />
    </Layout>
  );
};

export default DestinationsDetails;
