import DestinationsDetailsPage from "@/components/DestinationsDetails/DestinationsDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
export async function getStaticPaths() {
  // Fetch all package IDs from the API
  const res = await fetch(
    "https://api.yellowribbontravels.com/api/destinations"
  );
  const packages = await res.json();

  const paths = packages.map((pkg) => ({
    params: { id: pkg.id.toString() },
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

  const packageData = await res.json();

  return {
    props: { packageData },
    revalidate: 60, // ISR every 1 minute
  };
}
const DestinationsDetails = () => {
  return (
    <Layout pageTitle="Destinations Details">
      <PageHeader title="Destinations Details" page="Destinations" />
      <DestinationsDetailsPage />
    </Layout>
  );
};

export default DestinationsDetails;
