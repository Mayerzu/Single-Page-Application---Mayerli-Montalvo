import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === data.email && u.password === data.password);
    if (user) {
      localStorage.setItem('userData', JSON.stringify(data));
      alert('Login exitoso!');
      navigate('/home');
    } else {
      alert('Credenciales inválidas. Regístrate si no tienes cuenta.');
    }
  };

  return (
    <div className="login">
      <h2>Inicia Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email es requerido',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Email inválido'
            }
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Contraseña"
          {...register('password', {
            required: 'Contraseña es requerida',
            minLength: {
              value: 6,
              message: 'Contraseña debe tener al menos 6 caracteres'
            }
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
      <p className="register-link">¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
    </div>
  );
};

export default Login;