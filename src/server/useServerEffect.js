import { useState, useContext } from 'react';
import { Context } from '../ContextProvider';

const useServerEffect = (initial, key, effect) => {
  const context = useContext(Context);
  const [data] = useState(context[key] || initial);
  if (context.requests) {
    // eslint-disable-next-line
    context.requests.push(effect().then((data) => (context[key] = data)));
  }
  return [data];
};
export default useServerEffect;
