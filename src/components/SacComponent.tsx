import React from "react"
import { Sac } from "../pages"

const SacComponent: React.FC<Sac> = (props) => {
  return (
    <>
      <div className="flex flex-col gap-10 rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <h1 className="text-2xl font-bold text-gray-900">Sac à dos</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-gray-500">Poids maximal</span>
            <span className="text-gray-900">{props.poidsMaximal}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500">Poids actuel</span>
            <span className="text-gray-900">{props.poidsCurrent}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500">Gain maximal</span>
            <span className="text-gray-900">{props.gainTotal}</span>
          </div>
          {/* a table that shows the objects */}
        </div>
      </div>
      <div className="flex flex-col gap-10 rounded-lg bg-white p-8 shadow-lg lg:col-span-2 lg:p-12">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Poids</th>
              <th className="px-4 py-2">Gain</th>
            </tr>
          </thead>
          <tbody>
            {props.objets.map((objet) => (
              <tr key={objet.nom}>
                <td className="border px-4 py-2">{objet.nom}</td>
                <td className="border px-4 py-2">{objet.poids}</td>
                <td className="border px-4 py-2">{objet.gain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SacComponent
