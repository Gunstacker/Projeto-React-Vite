import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from "./Cadastro.module.css";
import Swal from 'sweetalert2';
import usuariosData from './../../../db.json';

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    if (username && password && confirmPassword) {
      if (password !== confirmPassword) {
        setMessage('As senhas não coincidem.');
      } else {
        // Verifique se já existe um usuário com o mesmo username
        const userExists = usuariosData.usuarios.some(
          (user) => user.username === username
        );
  
        if (userExists) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ja existe um Usuário com esse nome!',           
          });
        } else {
          const newUser = {
            id: Date.now(),
            username,
            password,
          };
  
          usuariosData.usuarios.push(newUser);
  
          console.log('Dados atualizados:', usuariosData);
  
          setUsername('');
          setPassword('');
          setConfirmPassword('');
          Swal.fire(
            'Cadastro bem sucedido',
            'Clique em OK!',
            'success'
          );
          navigate('/../Login'); // Redirecionar após o cadastro bem-sucedido
        }
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um Erro ao cadastrar',           
      });
    }
  };

  return (
    <div className={`container ${styles.cardfull}`}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`card mt-5 ${styles.card}`}>
            <div className="card-body">
              <h2 className="card-title text-center">Cadastro</h2>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Usuário
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder='Nome de usuario'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder='Digite a sua senha'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder='Confirme a senha'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
              <button
                type="button"
                className="btn btn-primary justify-content-center"
                onClick={handleCadastro}
              >
                Cadastrar
              </button>
              </div>
              <div className={`btnLogin ${styles.btnLogin}`}>
                          Já possui conta?{' '}
                          <a href="./Login" className={`login ${styles.login}`}>
                            <span className={`login ${styles.login}`}>
                              Faça Login já!
                            </span>
                          </a>
                          </div>
              {message && <p className="mt-2 text-danger">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;