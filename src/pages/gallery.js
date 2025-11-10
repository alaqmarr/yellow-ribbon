import fs from "fs";
import path from "path";
import Layout from "@/components/Layout/Layout";
import GalleryPage from "@/components/PopularTours/GalleryPage";
import PageHeader from "@/components/PageHeader/PageHeader";

export async function getStaticProps() {
  const galleryDir = path.join(process.cwd(), "public/gallery");
  const files = fs
    .readdirSync(galleryDir)
    .filter(f => /\.(png|jpe?g|webp|gif)$/i.test(f));
  const images = files.map(f => `/gallery/${f}`);
  return { props: { images } };
}

const Gallery = ({images}) => {
  return (
    <Layout pageTitle="Gallery">
      <PageHeader title="Gallery" page="Gallery" />
      <GalleryPage toursPage images={images}/>
    </Layout>
  );
};

export default Gallery;