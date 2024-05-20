import { useState } from "react"

export const useTooltip = (isTooltip = false) => {
  const [tooltip, setTooltip] = useState(isTooltip)
  const showTooltip = () => setTooltip(true)
  const hiddenTooltip = () => setTooltip(false)
  return {tooltip, showTooltip, hiddenTooltip}
}
