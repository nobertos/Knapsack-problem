import React, { useEffect, useState } from "react"
import FormInput from "../components/FormInput"
import Button from "../components/Button"
import Form from "../components/Form"

interface FormProps {
  onSubmit: (values: number) => void
}
interface FormValues {
  poids_maximal: number
}

const SacForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [formFields, setFormFields] = useState<FormValues>({
    poids_maximal: 0,
  })
  useEffect(() => {
    console.log("formFields", formFields)
  }, [formFields])

  return (
    <>
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg italic text-gray-500">
          Le problème du sac à dos est un problème d'optimisation combinatoire : Étant
          donné un ensemble d'objets, chacun ayant un poids et une valeur, déterminer le
          nombre de chaque objet à inclure dans une collection de sorte que le poids
          total soit inférieur ou égal à une limite donnée et que la valeur totale soit
          aussi grande que possible. Il tire son nom du problème rencontré par quelqu'un
          qui est contraint par un sac à dos de taille fixe et qui doit le remplir avec
          les objets les plus précieux.
        </p>
      </div>

      <div className="flex h-full flex-col gap-10 rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <h1 className="text-2xl font-bold text-gray-900">Sac à dos</h1>
        <Form value={formFields} onChange={setFormFields}>
          {" "}
          <FormInput
            label="Poids maximal"
            type="number"
            name="poids_maximal"
            placeholder="Poids maximal"
            required
          />
          <Button
            onClick={() => {
              onSubmit(formFields.poids_maximal)
            }}
            type="submit"
            className="mt-auto flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            title="Suivant"
          />
        </Form>
      </div>
    </>
  )
}

export default SacForm
