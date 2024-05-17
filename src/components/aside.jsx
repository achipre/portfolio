import { IconsPortfolio, IconsTechAngular, IconsTechAstro, IconsTechExpress, IconsTechFigma, IconsTechFirebase, IconsTechGo, IconsTechJavaScript, IconsTechJest, IconsTechNest, IconsTechNext, IconsTechNode, IconsTechPHP, IconsTechPlayWrite, IconsTechReact, IconsTechRedux, IconsTechRuby, IconsTechTailwind, IconsTechThreejs, IconsTechTypeScript, IconsTechVite, IconsTechVue, IconsTechs } from "../assets/Icons"

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

        <h2 className={`font-bowlby flex row items-center gap-2 text-2xl sm:text-4xl md:text-2xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} sm:justify-center pb-2`}>
          <IconsTechs fill={configTheme} />
          Technologies
        </h2>
        <section className="pt-1 pb-8 flex flex-wrap gap-2 items-center">
          <IconsTechVite isActive={false} isPrimary={configTheme} />
          <IconsTechJavaScript isActive={false} isPrimary={configTheme} />
          <IconsTechTypeScript isActive={false} isPrimary={configTheme} />
          <IconsTechAstro isActive={false} isPrimary={configTheme} />
          <IconsTechReact isActive={false} isPrimary={configTheme} />
          <IconsTechRedux isActive={false} isPrimary={configTheme} />
          <IconsTechNext isActive={false} isPrimary={configTheme} />
          <IconsTechVue isActive={false} isPrimary={configTheme} />
          <IconsTechAngular isActive={false} isPrimary={configTheme} />
          <IconsTechNode isActive={false} isPrimary={configTheme} />
          <IconsTechExpress isActive={false} isPrimary={configTheme} />
          <IconsTechNest isActive={false} isPrimary={configTheme} />
          <IconsTechFirebase isActive={false} isPrimary={configTheme} />
          <IconsTechThreejs isActive={false} isPrimary={configTheme} />
          <IconsTechTailwind isActive={false} isPrimary={configTheme} />
          <IconsTechFigma isActive={false} isPrimary={configTheme} />
          <IconsTechJest isActive={false} isPrimary={configTheme} />
          <IconsTechPlayWrite isActive={false} isPrimary={configTheme} />
          <IconsTechGo isActive={false} isPrimary={configTheme} />
          <IconsTechRuby isActive={false} isPrimary={configTheme} />
          <IconsTechPHP isActive={false} isPrimary={configTheme} />
        </section>
        <h2 className={`font-bowlby flex items-center gap-2 text-2xl sm:text-4xl md:text-2xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} sm:justify-center pb-2`}>Redes</h2>
      </aside>
  )
}
