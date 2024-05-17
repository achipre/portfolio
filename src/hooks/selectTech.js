import { useState } from "react"

export const useSelect = (isSelect = false) => {
  const [selectTech, setSelectTech] = useState(isSelect)
  const handleTech = () => setSelectTech(!selectTech)
  console.log(selectTech);
  
  return {selectTech, handleTech}
}