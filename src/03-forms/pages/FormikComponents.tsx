import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import '../styles/styles.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: '',
};

const validationSchema = yup.object({
  firstName: yup.string().required('El nombre es necesario'),
  lastName: yup.string().required('El apellido es necesario'),
  email: yup
    .string()
    .email('El email no es válido')
    .required('El email es necesario'),
  terms: yup.boolean().oneOf([true], 'Debe aceptar los términos'),
  jobType: yup
    .string()
    .required('El trabajo es necesario')
    .notOneOf(['it-jr'], 'Por ahora esta opción no esta permitida'),
});

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      {/* HOC */}
      <Formik
        initialValues={initialValues}
        onSubmit={(formData) => console.log(formData)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">Nombre</label>
            <Field type="text" name="firstName" id="firstName" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Apellido</label>
            <Field type="text" name="lastName" id="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field type="text" name="email" id="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Tipo de trabajo</label>
            <Field name="jobType" id="jobType" as="select">
              <option value="" disabled>
                - Seleccionar -
              </option>
              <option value="developer">Desarrollador</option>
              <option value="designer">Diseñador</option>
              <option value="devops">Devops</option>
              <option value="it-jr">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <div className="terms">
              <Field type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms">Términos y Condiciones</label>
            </div>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
