import { useState } from 'react';

import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  const [collabs, setCollabs] = useState([]);

  const registerCollab = (collab) => {
    setCollabs([...collabs, collab]);
  };

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ];
  
  return (
    <>
      <Banner />
      <Form
        registerCollab={(collab) => registerCollab(collab)}
        teams={teams.map(({ name }) => name)}
      />
      {collabs.length > 0 ? (
        teams.map(({ name, primaryColor, secondaryColor }, index) => (
          <Team
            key={index}
            name={name}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            collabs={collabs.filter(({ team }) => team === name)}
          />
        ))
      ) : (
        <div style={{ paddingBottom: '64px', textAlign: 'center' }}>
          <h3>Não há colaborador cadastrado!</h3>
        </div>
      )}

      <Footer />
    </>
  );
};

export default App;
