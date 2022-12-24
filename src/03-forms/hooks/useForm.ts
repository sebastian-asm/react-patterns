import { useState, ChangeEvent } from 'react';

// <T> indica que el tipo de dato que se recibe es el mismo tipo en la salida
export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const resetForm = () => setFormData({ ...initialState });

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return { formData, onChange, resetForm, isValidEmail };
};
