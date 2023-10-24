import React, { useState } from 'react';
import styles from './Login.module.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import usuariosData from './../../../db.json';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Verifica se as credenciais correspondem a um usuário em usuariosData que foi passado no cadastro
    const user = usuariosData.usuarios.find((user) => user.username === email && user.password === password);

    if (user) {
      setAuthenticated(true);
      Swal.fire('Login bem sucedido', 'Clique em OK!', 'success');
      navigate('../');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login ou senha Incorretos',
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`card mt-5 ${styles.card}`}>
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Usuário
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}
                  >
                    Entrar
                  </button>
                </div>
                <div className={`btnRegister ${styles.btnRegister}`}>
                  Não possui conta?{' '}
                  <a href="./Cadastro" className={`register ${styles.register}`}>
                    <span className={`register ${styles.register}`}>
                      Cadastre-se já!
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;