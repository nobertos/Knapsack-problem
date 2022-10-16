import { invoke } from "@tauri-apps/api/tauri"
import type { NextPage } from "next"
import React, { useState } from "react"

import { useGlobalShortcut } from "@/hooks/tauri/shortcuts"
import Layout from "@/widgets/Layout"
import SacForm from "./SacForm"
import ObjetForm from "./ObjetForm"
import Button from "../components/Button"
import SacComponent from "../components/SacComponent"

interface Objet {
  nom: string
  poids: number
  gain: number
}
export interface Sac {
  objets: Objet[]
  poidsMaximal: number
  poidsCurrent: number
  gainTotal: number
}

const Home: NextPage = () => {
  const [SacVisible, setSacVisible] = useState<boolean>(true)
  const [objetVisible, setObjetVisible] = useState<boolean>(true)
  const [poidsMaximal, setPoidsMaximal] = useState<number>(0)
  const [sac, setSac] = useState<Sac>({
    objets: [],
    poidsMaximal: 0,
    poidsCurrent: 0,
    gainTotal: 0,
  })
  const onSacSubmit = (poids_maximal) => {
    // parse poids_maximal to number

    setPoidsMaximal(parseInt(poids_maximal))
    alert(JSON.stringify(poidsMaximal))
    setSacVisible(false)
  }
  const [objets, setObjets] = useState<Objet[]>([])
  const onObjetsSubmit = (values: Objet) => {
    invoke("calculate_knapsack", { poidsMaximal, objets })
      .then((result) => {
        setObjetVisible(false)
        setSac({
          objets: result.objets,
          poidsMaximal: result.poids_maximal,
          poidsCurrent: result.poids_current,
          gainTotal: result.gain_total,
        })
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <Layout>
      <section className="w-full bg-gray-100">
        <div className="sel mx-auto max-w-screen-xl px-4  py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            {SacVisible ? (
              <SacForm onSubmit={onSacSubmit} />
            ) : objetVisible ? (
              <ObjetForm
                onAddObjet={(values: Objet) => {
                  let objet = {
                    nom: values.nom,
                    poids: parseInt(values.poids),
                    gain: parseInt(values.gain),
                  }
                  setObjets([...objets, objet])
                  alert(JSON.stringify(objets))
                }}
                onSubmit={onObjetsSubmit}
              />
            ) : (
              <SacComponent
                objets={sac.objets}
                poidsMaximal={sac.poidsMaximal}
                poidsCurrent={sac.poidsCurrent}
                gainTotal={sac.gainTotal}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
