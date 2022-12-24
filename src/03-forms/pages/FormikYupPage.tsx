import { useFormik } from 'formik';
import * as yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (formData) => {
      console.log(formData);
    },
    validationSchema: yup.object({
      firstName: yup.string().required('El nombre es necesario'),
      lastName: yup.string().required('El apellido es necesario'),
      email: yup
        .string()
        .email('El email no es válido')
        .required('El email es necesario'),
    }),
  });

  return (
    <div>
      <h1>Formik & Yup</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre</label>
        {/* con la destructuracion de getFieldProps se obtiene el onChange, onBlur, value y name */}
        <input type="text" id="firstName" {...getFieldProps('firstName')} />
        {errors.firstName && touched.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Apellido</label>
        <input type="text" id="lastName" {...getFieldProps('lastName')} />
        {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...getFieldProps('email')} />
        {errors.email && touched.email && <span>{errors.email}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
