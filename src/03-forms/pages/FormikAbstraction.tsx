import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { InputCheckbox, InputText, Select } from '../components';

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

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      {/* HOC */}
      <Formik
        initialValues={initialValues}
        onSubmit={(formData) => console.log(formData)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <InputText label="Nombre" name="firstName" id="firstName" />
            <InputText label="Apellido" name="lastName" id="lastName" />
            <InputText label="Email" name="email" id="email" type="email" />

            <Select label="Tipo de trabajo" name="jobType" id="jobType">
              <option value="" disabled>
                - Seleccionar -
              </option>
              <option value="developer">Desarrollador</option>
              <option value="designer">Diseñador</option>
              <option value="devops">Devops</option>
              <option value="it-jr">IT Junior</option>
            </Select>

            <InputCheckbox
              label="Términos y Condiciones"
              name="terms"
              id="terms"
            />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
