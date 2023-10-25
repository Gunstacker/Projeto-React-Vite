import React from 'react';
import Formulario from '../layout/Formulario';

const camposCadastro = [
  {
    name: 'username',
    label: 'Usuário',
    type: 'text',
    placeholder: 'Digite seu usuário',
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
  },
  {
    name: 'confirmPassword',
    label: 'Confirmar Senha',
    type: 'password',
    placeholder: 'Confirme sua senha',
  },
];

const Cadastro = () => {
  return (
    <Formulario
      campos={camposCadastro}
      tituloBotao="Cadastrar"
      link="/Login"
      texto="Já tem uma conta?"
      texto2="Faça Login já!"
      isLogin={false}
    />
  );
};

export default Cadastro;
