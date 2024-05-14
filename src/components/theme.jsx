export const Theme = ({handleTheme,theme,configTheme}) => {
  return (
    <button onClick={handleTheme} className={`absolute w-6 h-6 bg-${theme[configTheme]} rounded-full right-4 top-4 z-50`}></button>
    
  )
}
