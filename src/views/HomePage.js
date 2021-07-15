import React from 'react';
import fetchIso from 'isomorphic-fetch';
import P from '../components/P/P';
import Heading from '../components/Heading/Heading';
import useServerEffect from '../server/useServerEffect';

const HomePage = () => {
  const [characters] = useServerEffect([], 'characters', () =>
    fetchIso('https://adventuretimeapi.herokuapp.com/people').then((res) =>
      res.json()
    )
  );

  // const [characters, setCharacters] = useState([]);
  // useEffect(() => {
  //   fetchIso('https://adventuretimeapi.herokuapp.com/people')
  //     .then((res) => res.json())
  //     .then((data) => setCharacters(data));
  // }, []);

  return (
    <div>
      <Heading>Adventure time characters</Heading>
      {characters.map((c) => (
        <P key={c.id}>{c.name}</P>
      ))}
    </div>
  );
};

export default HomePage;
