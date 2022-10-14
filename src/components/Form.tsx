import React, { useCallback, useEffect, useState } from "react"

import { createContext } from "react"

interface FormContextProps {
  value: (field: string) => string | number
  setValue: (field: string, value: string | number) => void
}

export const FormContext = createContext<FormContextProps>({
  value: (field: string) => "",
  setValue: () => {},
})

interface FormProps {
  onChange?: (values: Object) => void
  value?: Object
  children?: React.ReactNode[]
}

function updateWith(oldState: Object, field: string, value: string | number) {
  const newState = { ...oldState }
  newState[field] = value
  return newState
}

const Form: React.FC<FormProps> = ({ onChange, children, value }) => {
  const [values, setValues] = useState(value || {})
  useEffect(() => {
    setValues(value || {})
  }, [value])
  useEffect(() => {
    if (onChange) {
      onChange(values)
    }
  }, [onChange, values])

  let setValue = useCallback(
    (field: string, value: string | number) => {
      setValues((vs: string | number) => updateWith(vs, field, value))
    },
    [setValues],
  )
  let getValue = useCallback((field: string) => values[field], [values])
  let form = { setValue: setValue, value: getValue }

  return (
    <FormContext.Provider value={form}>
      <div className="flex h-full flex-col space-y-4">{children}</div>
    </FormContext.Provider>
  )
}

export default Form
