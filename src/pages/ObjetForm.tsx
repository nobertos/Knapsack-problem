import Image from "next/image"
import React, { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import FormInput from "../components/FormInput"
import BackPack from "../../images/backpack.png"

interface FormProps {
  onSubmit: (values: any) => void
  onAddObjet: (objet: any) => void
}
const ObjetForm: React.FC<FormProps> = ({ onAddObjet, onSubmit }) => {
  const [formFields, setFormFields] = useState({
    nom: "",
    poids: 0,
    gain: 0,
  })

  return (
    <>
      <div className="flex flex-col lg:col-span-2 lg:py-12">
        <p className="relative h-1/4 w-full max-w-xl text-lg italic text-gray-500">
          la taille du sac à dos est limitée, et chaque objet a un poids et une valeur
        </p>
        <span className="relative h-full w-full">
          <Image src={BackPack} alt="Sac à dos" layout="fill" objectFit="contain" />
        </span>
      </div>

      <div className="flex h-full flex-col gap-10 rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <h1 className="text-2xl font-bold text-gray-900">Sac à dos</h1>
        <Form value={formFields} onChange={setFormFields}>
          {" "}
          <FormInput
            label="nom"
            type="text"
            name="nom"
            placeholder="Le nom de l'objet"
            required
          />
          <FormInput
            label="poids"
            type="number"
            name="poids"
            placeholder="Le poids de l'objet"
            required
          />
          <FormInput
            label="gain"
            type="number"
            name="gain"
            placeholder="la valeur de l'objet"
            required
          />
          <div className=" grid w-full grid-cols-2 gap-1">
            <Button
              onClick={() => {
                onAddObjet(formFields)
                setFormFields({
                  nom: "",
                  poids: 0,
                  gain: 0,
                })
              }}
              type="submit"
              className="col-span-1 mt-auto flex w-full items-center justify-center rounded-lg bg-gray-800 px-5 py-3 text-white hover:bg-gray-600 sm:w-auto"
              title="Ajouter"
            />
            <Button
              onClick={() => {
                onSubmit(formFields)
                setFormFields({
                  nom: "",
                  poids: 0,
                  gain: 0,
                })
              }}
              type="submit"
              className="col-span-1 mt-auto flex w-full items-center justify-center rounded-lg bg-slate-800 px-5 py-3 text-white hover:bg-slate-600 sm:w-auto"
              title="Calculer"
              end
            />
          </div>
        </Form>
      </div>
    </>
  )
}

export default ObjetForm
