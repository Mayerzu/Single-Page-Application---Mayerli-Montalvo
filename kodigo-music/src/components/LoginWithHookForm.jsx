import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert('Formulario válido! (Simulación de login)');
    navigate('/');
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
    </div>
  );
};

export default Login;