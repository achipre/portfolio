export const Theme = ({handleTheme,theme,configTheme}) => {
  console.log(theme[configTheme]);
  return (
    <button onClick={handleTheme} 
      className={`
      absolute border-4 border-${configTheme === 0 ? theme[1]: theme[0]}
      box-content w-6 h-6 bg-${theme[configTheme]} 
      rounded-full right-2 top-2 z-50 
      md:bg-${configTheme === 0 ? theme[1]: theme[0]} `}>
    </button>
    
  )
}
