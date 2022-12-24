import { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const { formData, onChange, resetForm, isValidEmail } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const { name, email, password1, password2 } = formData;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          value={name}
          onChange={onChange}
          name="name"
          type="text"
          placeholder="Nombre"
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>El nombre es necesario</span>}

        <input
          value={email}
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>El email no es válido</span>}

        <input
          value={password1}
          onChange={onChange}
          name="password1"
          type="password"
          placeholder="Contraseña"
          className={`${password1.trim().length <= 0 && 'has-error'}`}
        />
        {password1.trim().length <= 0 && <span>Este dato es necesario</span>}

        <input
          value={password2}
          onChange={onChange}
          name="password2"
          type="password"
          placeholder="Repetir contraseña"
          className={`${password2.trim().length <= 0 && 'has-error'}`}
        />
        {password2.trim().length <= 0 && <span>Este dato es necesario</span>}
        {password1 !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}

        <button>Register</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
