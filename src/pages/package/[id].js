import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TourDetailsOne from "@/components/TourDetails/TourDetailsOne";
import TourDetailsTwo from "@/components/TourDetails/TourDetailsTwo";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const TourDetails = ({ packageDetails }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout pageTitle={packageDetails?.name || "Package Details"}>
      <PageHeader title={packageDetails?.name || "Package Details"} />
      <TourDetailsOne tour={packageDetails} />
      <TourDetailsTwo tour={packageDetails} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await axios.get(
    "https://api.yellowribbontravels.com/api/packages"
  );
  const packages = res.data;

  const paths = packages.map((pkg) => ({
    params: { id: pkg.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await axios.get(
    "https://api.yellowribbontravels.com/api/packages"
  );
  const packages = res.data;
  const packageDetails = packages.find((pkg) => pkg.id === id);

  if (!packageDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      packageDetails,
    },
    revalidate: 60,
  };
}

export default TourDetails;
