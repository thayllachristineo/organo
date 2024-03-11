import './Form.css';

import Input from '../Input';

const Form = () => (
  <section>
    <form>
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Input label="Cargo" placeholder="Digite seu cargo" />
      <Input label="Imagem" placeholder="Informe o endereço da imagem" />
      <Input label="Time" placeholder="Digite seu nome" />
    </form>
  </section>
);

export default Form;
