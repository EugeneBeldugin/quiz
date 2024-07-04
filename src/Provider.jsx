import React, { createContext, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'

export const LangContext = createContext(null)

const Provider = () => {
  const [lang, setLang] = useState('en');

  return (
    <>
      <LangContext.Provider value={{ lang, setLang }}>
        <RouterProvider router={router} />
      </LangContext.Provider>
    </>
  )
}

export default Provider