import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { InputText, Select } from '../components';
import formJson from '../data/form.json';

// creando de forma dinánica el estado inicial del formulario y sus validaciones
const initialValues: { [key: string]: any } = {};
const requiredFiels: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es necesario');
    }

    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value,
        `Se necesita un mínimo de ${(rule as any).value} carácteres`
      );
    }

    if (rule.type === 'email') {
      schema = schema.email('El email no es válido');
    }
  }

  requiredFiels[input.name] = schema;
}

const validationSchema = yup.object({ ...requiredFiels });

// Los formularios dinámicos son creados en momento de ejecución, obtiendo la data desde el backend
export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, label, placeholder, options }) => {
              if (type === 'text' || type === 'password' || type === 'email') {
                return (
                  <InputText
                    key={name}
                    label={label}
                    type={type as any}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === 'select') {
                return (
                  <Select key={name} label={label} name={name} id={name}>
                    <option value="" disabled>
                      - Seleccionar -
                    </option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </Select>
                );
              }
            })}
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
