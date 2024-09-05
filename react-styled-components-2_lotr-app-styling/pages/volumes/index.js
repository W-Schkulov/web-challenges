// pages/volumes/[slug].js
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import Layout from "./layout";{
  Title,
  Introduction,
  BookList,
  BookItem,
  CoverImage,
  BackButton,
} from "./layout";
import ArrowLeftIcon from "../../design-resources/arrow-left.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const handleBackClick = () => {
    router.push("/volumes");
  };

  return (
    <Layout>
      <BackButton onClick={handleBackClick}>
        <ArrowLeftIcon /> ← All Volumes
      </BackButton>
      <Title>{volume.title}</Title>
      <Introduction>{volume.description}</Introduction>
      <BookList>
        {volume.books.map(({ ordinal, title }) => (
          <BookItem key={title}>
            {ordinal}: <strong>{title}</strong>
          </BookItem>
        ))}
      </BookList>
      <CoverImage
        as={Image}
        src={volume.cover}
        alt={`Cover image of ${volume.title}`}
        width={140}
        height={230}
      />
    </Layout>
  );
}
