import { IconsPortfolio, IconsTechAngular, IconsTechFigma, IconsTechFirebase, IconsTechNode, IconsTechReact, IconsTechThreejs, IconsTechVite, IconsTechVue, IconsTechs } from "../assets/Icons"

export const Aside = ({theme,configTheme}) => {
  return (
    <aside className={`relative select-none ${configTheme === 0 ? 'bg-'+theme[1]: 'bg-'+theme[0]} p-6 sm:p-8 md:max-w-lg md:w-[35%] md:h-full`}>
        <h1 className={`font-bowlby flex items-center gap-2 text-3xl sm:text-5xl md:text-[5vw] lg:text-5xl  sm:justify-center md:justify-start lg:justify-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} pb-2`}>
          <IconsPortfolio fill={configTheme} />
          Portfolio
        </h1>
        <p className={`text-${theme[configTheme]} font-paytone leading-5 text-xl sm:text-3xl md:text-2xl pb-8 text-balance`}>
        Welcome to my portfolio of{' '}
          <span className={`ml-1 uppercase font-amatic text-3xl sm:text-4xl ${configTheme === 0 ? 'text-[#008b07]': 'text-[#c9ffc4]'}`}>Frontend,{' '}</span>
          <span className={`uppercase font-amatic text-3xl sm:text-4xl ${configTheme === 0 ? 'text-[#c11414]': 'text-[#ffe1e1]'}`}>Backend,{' '}</span>
          <span className={`uppercase font-amatic text-3xl sm:text-4xl ${configTheme === 0 ? 'text-[#0000ff]': 'text-[#d5e4ff]'}`}>FullStack,{' '}</span>
          <span className={`uppercase font-amatic text-3xl sm:text-4xl ${configTheme === 0 ? 'text-[#4f4f4f]': 'text-[#e7e7e7]'}`}>UX/UI</span>  projects and more.
        </p>

        <h2 className={`font-bowlby flex items-center gap-2 text-2xl sm:text-4xl md:text-2xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} sm:justify-center pb-2`}>
          <IconsTechs fill={configTheme} />
          Technologies
        </h2>
        <section className="pt-1 pb-8 flex gap-2 items-center">
          <IconsTechVite isActive={true} isPrimary={configTheme} />
          <IconsTechReact isActive={true} isPrimary={configTheme} />
          <IconsTechVue isActive={true} isPrimary={configTheme} />
          <IconsTechAngular isActive={true} isPrimary={configTheme} />
          <IconsTechNode isActive={true} isPrimary={configTheme} />
          <IconsTechFigma isActive={true} isPrimary={configTheme} />
          <IconsTechFirebase isActive={true} isPrimary={configTheme} />
          <IconsTechThreejs isActive={true} isPrimary={configTheme} />
        </section>
        <h2 className={`font-bowlby text-2xl sm:text-4xl md:text-[4vw] lg:text-4xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'}`}>Redes</h2>
      </aside>
  )
}
