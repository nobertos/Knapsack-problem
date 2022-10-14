import { invoke } from "@tauri-apps/api/tauri"
import type { NextPage } from "next"
import React, { useState } from "react"

import { useGlobalShortcut } from "@/hooks/tauri/shortcuts"
import Layout from "@/widgets/Layout"
import SacForm from "./SacForm"
import ObjetsForm from "./ObjetsForm"

const Home: NextPage = () => {
  const [SacVisible, setSacVisible] = useState(true)
  const onSacSubmit = (values: Object) => {
    setSacVisible(false)
    console.log(values)
  }
  // const [buttonDesc, setButtonDesc] = useState<string>(
  //   "Waiting to be clicked. This calls 'on_button_clicked' from Rust.",
  // )
  // const onButtonClick = () => {
  //   invoke<string>("on_button_clicked")
  //     .then((value) => {
  //       setButtonDesc(value)
  //     })
  //     .catch(() => setButtonDesc("Failed to invoke Rust command 'on_button_clicked'"))
  // }

  // useGlobalShortcut("CommandOrControl+P", () => {
  //   console.log("Ctrl+P was pressed!")
  // })

  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            {SacVisible ? <SacForm onSubmit={onSacSubmit} /> : <ObjetsForm />}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
