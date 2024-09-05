import { useRouter } from "next/router";

import ArrowLeftIcon from "../../design-resources/arrow-left.svg";
import { volumes } from "../../lib/data";
import { Image } from "next/images";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
  background-color: #1c1c1c;
  color: #ffffff;
  font-family: var(--font-family);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;

  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 600px;
  margin-bottom: 20px;
`;

const BookList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const BookItem = styled.li`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const CoverImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
  border-radius: 4px;
  margin-bottom: 20px;
`;

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
    <PageContainer>
      <BackButton onClick={handleBackClick}>
        <ArrowLeftIcon /> All Volumes
      </BackButton>
      <Title>{volume.title}</Title>
      <Description>{volume.description}</Description>
      <BookList>
        {volume.books.map(({ ordinal, title }) => (
          <BookItem key={title}>
            {ordinal}: <strong>{title}</strong>
          </BookItem>
        ))}
      </BookList>

      <CoverImage
        src={volume.cover}
        alt={`Cover image of ${volume.title}`}
        width={140}
        height={230}
      />
      {previousVolume && (
        <BackButton
          onClick={() => router.push(`/volumes/${previousVolume.slug}`)}
        >
          ← Previous Volume: {previousVolume.title}
        </BackButton>
      )}
      {nextVolume && (
        <BackButton onClick={() => router.push(`/volumes/${nextVolume.slug}`)}>
          Next Volume: {nextVolume.title} →
        </BackButton>
      )}
    </PageContainer>
  );
}
