import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === data.email);
    if (existingUser) {
      alert('Email ya registrado. Inicia sesión.');
    } else {
      users.push(data);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registro exitoso! Inicia sesión.');
      navigate('/');
    }
  };

  return (
    <div className="register">
      <h2>Regístrate</h2>
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
        <button type="submit">Registrarse</button>
      </form>
      <p className="register-link">¿Ya tienes cuenta? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Register;