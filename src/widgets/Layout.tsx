import React, { FC } from "react"
import Head from "next/head"
import Image from "next/image"
interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Head>
        <title>Problem du sac à dos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 items-center justify-start py-8 pl-4">
        {children}
      </main>
      <footer className="flex flex-1 flex-grow-0 items-center justify-center border-t border-gray-200 py-4">
        <div>
          <a
            href="https://tauri.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-grow items-center justify-center p-4"
          >
            Fait par Rayene Nassim Zorgani, Ahmed Ayoub BELLACHIA en utilisant{" "}
            <span className="ml-2 h-6">
              <Image
                src="/tauri_logo_light.svg"
                alt="tauri logo"
                height={24}
                width={78}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
