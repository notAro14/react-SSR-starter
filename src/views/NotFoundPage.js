import React from 'react';
import { useLocation } from 'react-router-dom';
import Link from '../components/Link/Link';
import P from '../components/P/P';
import Heading from '../components/Heading/Heading';

const NotFound = (props) => {
  const { pathname } = useLocation();
  // eslint-disable-next-line
  const { staticContext = {} } = props;
  // eslint-disable-next-line
  staticContext.status = 404;
  return (
    <div>
      <Heading>Oops</Heading>
      <P>
        It seems that the page at <strong>{pathname}</strong> does not exist
      </P>
      <P>
        Return to <Link to="/">Home</Link>
      </P>
    </div>
  );
};

export default NotFound;
