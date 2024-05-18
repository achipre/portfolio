import { useState } from "react"

export const useSelect = (isSelect = false) => {
  const [selectTech, setSelectTech] = useState(isSelect)
  const handleTech = () => setSelectTech(!selectTech)
  
  return {selectTech, handleTech}
}