import React from 'react';
import Formulario from '../layout/Formulario';

const Login = () => {
  const camposLogin = [
    {
      name: 'username',
      label: 'Usuário',
      type: 'text',
      placeholder: 'Seu Usuário',
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Sua senha',
    },
  ];

  return (
    <Formulario
      campos={camposLogin}
      tituloBotao="Entrar"
      link="./Cadastro"
      texto="Ainda não tem uma conta?"
      texto2="Cadastre-se já!"
      isLogin={true}
    />
  );
};

export default Login;
