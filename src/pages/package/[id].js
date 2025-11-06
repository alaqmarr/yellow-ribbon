import Layout from "@/components/Layout/Layout";
import PackageDetails from "@/components/Package";
import React from "react";

export async function getStaticPaths() {
  // Fetch all package IDs from the API
  const res = await fetch("https://api.yellowribbontravels.com/api/packages");
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
    `https://api.yellowribbontravels.com/api/packages/${params.id}`
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

const TourDetails = ({ packageData }) => {
  if (!packageData) return null;

  return (
    <Layout pageTitle={packageData.name}>
      <PackageDetails packageData={packageData} />
    </Layout>
  );
};

export default TourDetails;
