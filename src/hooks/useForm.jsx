import { useState } from "react";

export default function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => setValues(initialState);

  return {
    values,
    handleChange,
    resetForm,
    setValues,
  };
}
