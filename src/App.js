import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Button = styled.button`
  background-color: dodgerblue;
  border: none;
  border-radius: 5px;
  color: white;
  display: block;
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.main`
  align-items: center;
  flex-direction: column;
  height: 300px;
  display: flex;
  justify-content: space-around;
`;

const Layout = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const P = styled.p`
  background-color: #eee;
  border-radius: 5px;
  color: #333;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  color: yellow;
  font-weight: 900;
`;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth
  }
  body {
    background-color: #333;
    color: #eee;
    font-family: sans-serif
  }
`;

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Container>
          <Title>Universal react app</Title>
          <P>{count}</P>
          <Button type="button" onClick={() => setCount(count + 1)}>
            +
          </Button>
          <Button type="button" onClick={() => setCount(count - 1)}>
            -
          </Button>
        </Container>
      </Layout>
    </>
  );
}
