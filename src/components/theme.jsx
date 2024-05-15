export const Theme = ({handleTheme,configTheme}) => {
  return (
    <button onClick={handleTheme} 
      className={`absolute border-4 ${configTheme === 0 ? 'border-secondary bg-primary md:border-primary md:bg-secondary' : 'border-primary bg-secondary md:border-secondary md:bg-primary'} box-content w-6 h-6 rounded-full right-2 top-2 sm:right-3 sm:top-3 md:right-4 md:top-4 z-50`}>
    </button>
    
  )
}
