import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import axios from "axios";
import React from "react";

const Tours = ({packages}) => {
  return (
    <Layout pageTitle="Packages">
      <PageHeader title="Popular Packages" page="Packages" />
      <PopularToursTwo toursPage popularTours={packages}/>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await axios.get("https://api.yellowribbontravels.com/api/packages");
  return {
    props: { packages: res.data },
    revalidate: 60, // optional: ISR every 1 minute
  };
}

export default Tours;
