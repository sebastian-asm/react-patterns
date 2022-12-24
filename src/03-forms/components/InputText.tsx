import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  // comodín para recibir cualquier cosa, ya de por sí es opcional
  [x: string]: any;
}

export const InputText = ({ label, ...props }: Props) => {
  // meta: donde vienen la info en caso que fue tocado, si hay errores, etc.
  // const [field, meta] = useField(props);
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type={props.type} {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};
