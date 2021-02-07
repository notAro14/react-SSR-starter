import styled, { createGlobalStyle } from 'styled-components';

export const Button = styled.button`
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

export const Container = styled.main`
  align-items: center;
  flex-direction: column;
  height: 300px;
  display: flex;
  justify-content: space-around;
`;

export const Layout = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const P = styled.p`
  background-color: #eee;
  border-radius: 5px;
  color: #333;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: yellow;
  font-weight: 900;
`;

export const GlobalStyles = createGlobalStyle`
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
  li{
    list-style: none;
  }
  a {
    color: white;
  }
`;
