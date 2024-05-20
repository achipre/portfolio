import { useEffect, useState } from "react"
import info from '../assets/projects.json'


export const CounterProject = () => {
  const [data, setData] = useState(0)
  useEffect(() => {
    const projects = info.projects.length
    if (data === projects) return
    const secuancia = () => {
      setTimeout(() => {
        setData(prev => prev + 1)
        
      }, 10);
    }
    secuancia()
  }, [data])
  
  
  return (
    <span>{data}</span>
  )
}
