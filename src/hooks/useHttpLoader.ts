import { useState } from 'react';

const useHttpLoader = () => {
  const [loading, setLoading] = useState(false);

  const wait = (promise: Promise<any>) => {
    setLoading(true);
    promise.then(() => setLoading(false));
  };

  return { loading, wait };
};

export default useHttpLoader;
