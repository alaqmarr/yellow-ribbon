import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

export async function getStaticPaths() {
  const res = await fetch("https://api.yellowribbontravels.com/api/blogs");
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.yellowribbontravels.com/api/blogs/${params.id}`
  );

  if (!res.ok) return { notFound: true };

  const blogData = await res.json();

  return {
    props: { blogData },
    revalidate: 60, // regenerate every 60 seconds
  };
}

const BlogDetails = ({ blogData }) => {
  if (!blogData) return null;

  return (
    <Layout pageTitle={blogData.title}>
      <PageHeader title={blogData.title} />
      <NewsDetailsPage blogData={blogData} />
    </Layout>
  );
};

export default BlogDetails;
