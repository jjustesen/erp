import { createContext, useContext, useState } from 'react'

const PersonContext = createContext()

const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState(null)

  return (
    <PersonContext.Provider
      value={{
        person,
        setPerson
      }}
    >
      {children}
    </PersonContext.Provider>
  )
}

export default PersonProvider

export const usePerson = () => {
  const context = useContext(PersonContext)
  const { person, setPerson } = context

  return { person, setPerson }
}
