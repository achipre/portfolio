export const Theme = ({handleTheme,configTheme}) => {
  return (
    <button onClick={handleTheme} 
      className={`absolute border-4 ${configTheme === 0 ? 'border-secondary bg-primary ' : 'border-primary bg-secondary'} box-content w-6 h-6 rounded-full right-2 top-2 z-50`}>
    </button>
    
  )
}
