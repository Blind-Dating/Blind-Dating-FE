import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  className: string;
  id: Path<T>;
  label?: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions;
  error?: string;
};

const InputField = <T extends FieldValues>({
  id,
  label,
  placeholder,
  type,
  className,
  register,
  rules,
  error,
}: InputProps<T>) => {
  return (
    <div className="flex flex-col mb-5">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, rules)}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputField;
