import './Form.css';

import Input from '../Input';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = () => {
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
    console.log('O form foi submetido!');
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Informe o endereço da imagem" />
        <Dropdown label="Time" options={times} />

        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
