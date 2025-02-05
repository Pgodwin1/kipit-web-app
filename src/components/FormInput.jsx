import React from "react";

const FormInput = ({
  label,
  id,
  type,
  placeholder,
  error,
  hint,
  value,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        className="rounded-lg py-2 px-2 w-full border shadow-sm h-8"
        id={id}
        type={type}
        placeholder={placeholder}
        value={
          value && type == "date"
            ? new Date(value).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            : value
        }
        {...otherProps}
      />
      {hint && (
        <p className={`text-xs ${error ? "text-red-600" : "text-gray-600"}`}>
          {hint}
        </p>
      )}
    </div>
  );
};

export default FormInput;
