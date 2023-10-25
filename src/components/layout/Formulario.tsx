import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import usuariosData from './../../../db.json';
import styles from "./Formulario.module.css";

const Formulario = ({ campos, tituloBotao, link, texto, texto2, isLogin }) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    const { username, password } = values;
    console.log('Valores inseridos:', username, password);

    const userMatch = usuariosData.usuarios.find(
      (userObj) => userObj.username === username && userObj.password === password
    );

    if (userMatch) {
      Swal.fire('Login bem sucedido', 'Clique em OK!', 'success');
      navigate('../');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login ou senha incorretos',
      });
    }
  };

  const handleCadastro = () => {
    const { username, password, confirmPassword } = values;

    if (username && password && confirmPassword) {
      if (password !== confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'As senhas não coincidem.',
        });
      } else {
        const userExists = usuariosData.usuarios.some(
          (user) => user.username === username
        );

        if (userExists) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Já existe um Usuário com esse nome!',
          });
        } else {
          const newUser = {
            id: Date.now(),
            username,
            password,
          };

          usuariosData.usuarios.push(newUser);

          console.log('Dados atualizados:', usuariosData);

          setValues({
            username: '',
            password: '',
            confirmPassword: '',
          });

          Swal.fire('Cadastro bem sucedido', 'Clique em OK!', 'success');
          navigate('/../Login');
        }
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos corretamente.',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    if (isLogin) {
      handleLogin();
    } else {
      handleCadastro();
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`card mt-5 ${styles.card}`}>
            <div className="card-body">
              <h2 className="card-title text-center">{tituloBotao}</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                {campos.map((campo) => (
                  <div className="mb-3" key={campo.name}>
                    <label htmlFor={campo.name} className="form-label">
                      {campo.label}
                    </label>
                    <input
                      type={campo.type}
                      className="form-control"
                      id={campo.name}
                      name={campo.name}
                      placeholder={campo.placeholder}
                      value={values[campo.name]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    {tituloBotao}
                  </button>
                </div>
                {link && (
                  <div className="">
                    {texto}{' '}
                    <a href={link} className="">
                      <span className="register">{texto2}</span>
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
