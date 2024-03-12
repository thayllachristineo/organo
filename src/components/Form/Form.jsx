import { useState } from 'react';

import './Form.css';

import Input from '../Input';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = ({ registerCollab }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const handleOnChangeName = (ev) => {
    setName(ev.target.value);
  };

  const handleOnChangeRole = (ev) => {
    setRole(ev.target.value);
  };

  const handleOnChangeImage = (ev) => {
    setImage(ev.target.value);
  };

  const handleOnChangeTeam = (ev) => {
    setTeam(ev.target.value);
  };

  const times = [
    ' ',
    'Programação',
    'Front-End',
    'Data Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const onSubmit = (ev) => {
    ev.preventDefault();
    registerCollab({ name, role, image, team });
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => handleOnChangeName(e)}
        />
        <Input
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          onChange={(e) => handleOnChangeRole(e)}
        />
        <Input
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          onChange={(e) => handleOnChangeImage(e)}
        />
        <Dropdown
          label="Time"
          options={times}
          value={team}
          onChange={(e) => handleOnChangeTeam(e)}
        />

        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
