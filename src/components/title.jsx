export const TitleProyect = ({configTheme}) => {
  return (
    <p className={`hidden lg:flex z-10 h-full justify-end pr-3 text-9xl ${configTheme === 0 ? 'text-secondary': 'text-primary'} justify-start font-bebas [writing-mode:_vertical-lr] flex-nowrap rotate-180 select-none`}>
      <span className="title-animate text-nowrap">Tic-Tac-Toe <span className="flex h-32 justify-center items-center">•</span></span>
      <span className="title-animate text-nowrap">Tic-Tac-Toe <span className="flex h-32 justify-center items-center">•</span></span>
      <span className="title-animate text-nowrap">Tic-Tac-Toe <span className="flex h-32 justify-center items-center">•</span></span>
      <span className="title-animate text-nowrap">Tic-Tac-Toe <span className="flex h-32 justify-center items-center">•</span></span>
      <span className="title-animate text-nowrap">Tic-Tac-Toe <span className="flex h-32 justify-center items-center">•</span></span>
      <span className="title-animate text-nowrap">Tic-Tac-Toe <span className="flex h-32 justify-center items-center">•</span></span>
    </p>
  )
}
