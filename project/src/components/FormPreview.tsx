import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Field {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: { pattern: string; message: string };
}

interface FormSchema {
  formTitle: string;
  fields: Field[];
}

interface FormPreviewProps {
  schema: FormSchema | null;
}

export const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (!schema) return <div>Provide a valid JSON schema to render the form.</div>;

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="w-full p-4">
      <h2 className="font-bold mb-4">{schema.formTitle}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {schema.fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block font-medium mb-1">{field.label}</label>
            {field.type === "select" ? (
              <select {...register(field.id, { required: field.required })} className="w-full">
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "radio" ? (
              field.options?.map((option) => (
                <div key={option.value}>
                  <input
                    type="radio"
                    value={option.value}
                    {...register(field.id, { required: field.required })}
                  />
                  {option.label}
                </div>
              ))
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.id, { required: field.required })}
                className="w-full"
              />
            )}
            {errors[field.id] && <p className="text-red-500">This field is required</p>}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
