import { useFormik, FormikErrors } from 'formik';

import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ lastName, firstName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName.trim()) errors.firstName = 'El nombre es necesario';
    if (!lastName.trim()) errors.lastName = 'El apellido es necesario';

    if (!email) {
      errors.email = 'El email es necesario';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'El email no es válido';
    }

    return errors;
  };

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (formData) => {
      console.log(formData);
    },
    validate,
  });

  return (
    <div>
      <h1>Tutorial básico de Formik</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre</label>
        <input
          onChange={handleChange}
          value={values.firstName}
          onBlur={handleBlur}
          type="text"
          name="firstName"
          id="firstName"
        />
        {errors.firstName && touched.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Apellido</label>
        <input
          onChange={handleChange}
          value={values.lastName}
          onBlur={handleBlur}
          type="text"
          name="lastName"
          id="lastName"
        />
        {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          type="email"
          name="email"
          id="email"
        />
        {errors.email && touched.email && <span>{errors.email}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
