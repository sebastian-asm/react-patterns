import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { InputText } from '../components';

import '../styles/styles.css';

const initialValues = {
  name: '',
  email: '',
  password1: '',
  password2: '',
};

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Debe contener mínimo 2 carácteres')
    .max(15, 'El máximo es de 15 carácteres')
    .required('El nombre es necesario'),
  email: yup
    .string()
    .email('El email no es válido')
    .required('El email es necesario'),
  password1: yup
    .string()
    .min(6, 'El mínimo son 6 carácteres')
    .required('La contraseña es necesaria'),
  password2: yup
    .string()
    // se hace referencia al password1 para comprobar que sean iguales
    .oneOf([yup.ref('password1')], 'Las contraseñas deben ser iguales')
    .required('Este campo es necesario'),
});

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Formik Register Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(formData) => console.log(formData)}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form>
            <InputText label="Nombre" name="name" id="name" />
            <InputText label="Email" name="email" id="email" />
            <InputText label="Contraseña" name="password1" id="password1" />
            <InputText
              label="Repetir contraseña"
              name="password2"
              id="password2"
            />

            <button type="submit">Register</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
