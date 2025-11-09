import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsDetailsPage/NewsDetailsPage";
import PackageDetails from "@/components/Package";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

export async function getStaticPaths() {
  // Fetch all package IDs from the API
  const res = await fetch("https://api.yellowribbontravels.com/api/blogs");
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", // allows on-demand ISR for new IDs
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.yellowribbontravels.com/api/blogs/${params.id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const blogData = await res.json();

  return {
    props: { blogData },
    revalidate: 60, // ISR every 1 minute
  };
}

const TourDetails = ({ blogData }) => {
  if (!blogData) return null;

  return (
    <Layout pageTitle={blogData.title}>
      <PageHeader title={blogData.title} />
      <NewsDetailsPage blogData={blogData} />
    </Layout>
  );
};

export default TourDetails;
