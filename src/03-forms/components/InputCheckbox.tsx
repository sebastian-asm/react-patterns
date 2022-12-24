import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const InputCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <div className="terms">
        <input type="checkbox" {...field} {...props} />
        <label htmlFor={props.id || props.name}>{label}</label>
      </div>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
