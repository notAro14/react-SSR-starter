import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  Button,
  Container,
  Layout,
  P,
  Title,
  GlobalStyles,
} from './App.styles';

const Home = () => {
  const [count, setCount] = React.useState(0);

  return (
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
  );
};

const App = () => (
  <>
    <GlobalStyles />
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/installation">installation</Link>
      </li>
      <li>
        <Link to="/dead-link">dead-link</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/installation"
        component={() => <Container>Installation page</Container>}
      />
      <Route
        component={({ staticContext = {} }) => {
          staticContext.status = 404;
          return <Container>Not found page</Container>;
        }}
      />
    </Switch>
  </>
);

export default App;
