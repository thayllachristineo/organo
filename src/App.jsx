import { useState } from 'react';

import Banner from './components/Banner';
import Form from './components/Form';

const App = () => {
  const [collabs, setCollabs] = useState([]);

  const registerCollab = (collab) => {
    setCollabs([...collabs, collab]);
  };

  return (
    <>
      <Banner />
      <Form registerCollab={(collab) => registerCollab(collab)} />
    </>
  );
};

export default App;
