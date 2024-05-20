import { IconsTechAngular, IconsTechAstro, IconsTechExpress, IconsTechFigma, IconsTechFirebase, IconsTechGo, IconsTechJavaScript, IconsTechJest, IconsTechNest, IconsTechNext, IconsTechNode, IconsTechPHP, IconsTechPlayWrite, IconsTechReact, IconsTechRedux, IconsTechRuby, IconsTechTailwind, IconsTechThreejs, IconsTechTypeScript, IconsTechVite, IconsTechVue } from "../assets/Icons"
import { useSelectTech } from "../hooks/selectTech"
import { useTooltip } from "../hooks/showTooltip"

export const IconVite = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()
  return (
    <div className="relative">
      <IconsTechVite isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Vite</span>
    </div>
  )
}
export const IconJavaScript = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechJavaScript isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>JavaScript</span>
    </div>
  )
}
export const IconTypeScript = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechTypeScript isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>TypeScript</span>
    </div>
  )
}
export const IconReact = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechReact isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>React</span>
    </div>
  )
}
export const IconAstro = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechAstro isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Astro</span>
    </div>
  )
}
export const IconsNext = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechNext isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Next.js</span>
    </div>
  )
}
export const IconRedux = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechRedux isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Redux</span>
    </div>
  )
}
export const IconVue = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechVue isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Vue</span>
    </div>
  )
}
export const IconAngular = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechAngular isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Angular</span>
    </div>
  )
}
export const IconNode = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechNode isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Node</span>
    </div>
  )
}
export const IconExpress= ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechExpress isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Express</span>
    </div>
  )
}
export const IconNest = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechNest isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Nest</span>
    </div>
  )
}
export const IconJest = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechJest isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Jest</span>
    </div>
  )
}
export const IconPlayWrite = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechPlayWrite isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>PlayWrite</span>
    </div>
  )
}
export const IconFirebase = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechFirebase isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Firebase</span>
    </div>
  )
}
export const IconThreejs = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechThreejs isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Three.js</span>
    </div>
  )
}
export const IconTailwind = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechTailwind isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Tailwind</span>
    </div>
  )
}
export const IconFigma = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechFigma isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Figma</span>
    </div>
  )
}
export const IconGo = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechGo isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Go</span>
    </div>
  )
}
export const IconRuby = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechRuby isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>Ruby</span>
    </div>
  )
}
export const IconPHP = ({configTheme}) => {
  const {tooltip, showTooltip, hiddenTooltip} = useTooltip()
  const {selectTech, handleTech} = useSelectTech()

  return (
    <div className="relative">
      <IconsTechPHP isActive={selectTech} handletech={handleTech} isPrimary={configTheme} showTooltip={showTooltip} hiddenTooltip={hiddenTooltip} />
      <span className={`${configTheme === 0 ? 'bg-primary text-secondary': 'bg-secondary text-primary'} ${tooltip ? 'block':'hidden'} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 rounded-md font-paytone`}>PHP</span>
    </div>
  )
}
