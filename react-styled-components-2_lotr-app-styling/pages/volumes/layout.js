// components/Layout.js
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: #1c1c1c;
  color: #ffffff;
  font-family: var(--font-family);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Introduction = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: center;
`;

export const BookList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const BookItem = styled.li`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const CoverImage = styled.img`
  box-shadow: var(--box-shadow-book);
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
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

export default function Layout({ children }) {
  return <PageContainer>{children}</PageContainer>;
}
