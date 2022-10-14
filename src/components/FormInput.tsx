import React, { useContext } from "react"
import { FormContext } from "./Form"

interface FormInputProps {
  label: string
  type: string
  name: string
  placeholder: string
  className?: string
  required: boolean
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  placeholder,
  className,
  required,
}) => {
  const form = useContext(FormContext)
  if (!form.value) {
    alert("InputField should be wrapped in a form")
  }
  const value = form.value(name)
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        value={value || ""}
        onChange={(e) => form.setValue(name, e.target.value)}
        className={`w-full rounded-lg border-gray-200 p-3 text-sm ${className}`}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  )
}

export default FormInput
