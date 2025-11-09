import Layout from "@/components/Layout/Layout";
import NewsPage from "@/components/NewsPage/NewsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const News = ({ data }) => {
  return (
    <Layout pageTitle="Blogs">
      <PageHeader title="Latest Blogs" page="Blogs" />
      <NewsPage data={data} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.yellowribbontravels.com/api/blogs");
  const blogs = await res.json();

  return {
    props: { data: blogs },
    revalidate: 60, // ISR every 1 minute
  };
}

export default News;
