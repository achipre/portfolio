import { useState } from "react"

export const useTheme = () => {
  const theme = ["primary", "secondary"]
  const [configTheme, setConfigTheme] = useState(0)
  const numRandom = () => {
    const valor = Math.floor(Math.random() * theme.length)
    return valor 
  }
  const handleTheme = () => {
    setConfigTheme(prev => {
      const random = numRandom()
      if (prev === random) handleTheme()
      return random
    })
  }
  return {configTheme, handleTheme, theme}
}