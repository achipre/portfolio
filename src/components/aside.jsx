import { IconsGithub, IconsInstagram, IconsLinkedin, IconsPage, IconsPortfolio, IconsProyect, IconsSocial, IconsTechAngular, IconsTechAstro, IconsTechExpress, IconsTechFigma, IconsTechFirebase, IconsTechGo, IconsTechJavaScript, IconsTechJest, IconsTechNest, IconsTechNext, IconsTechNode, IconsTechPHP, IconsTechPlayWrite, IconsTechReact, IconsTechRedux, IconsTechRuby, IconsTechTailwind, IconsTechThreejs, IconsTechTypeScript, IconsTechVite, IconsTechVue, IconsTechs, IconsTwitter } from "../assets/Icons"

export const Aside = ({theme,configTheme}) => {
  return (
    <aside className={`relative flex flex-col select-none ${configTheme === 0 ? 'bg-'+theme[1]: 'bg-'+theme[0]} p-6 sm:p-8 md:max-w-lg md:w-[35%] md:h-full`}>
        <h1 className={`font-bowlby flex items-center gap-2 text-3xl xs:text-4xl sm:text-5xl md:text-[5vw] lg:text-5xl  justify-start xs:justify-center sm:justify-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} pb-0 xs:pb-1 sm:pb-2`}>
          <IconsPortfolio fill={configTheme} />
          Portfolio
        </h1>
        <p className={`text-${theme[configTheme]} font-paytone leading-5 text-xl xs:text-2xl sm:text-3xl md:text-2xl pb-6 text-balance xs:text-center sm:text-center`}>
        Welcome to my portfolio of{' '}
          <span className={`ml-1 uppercase font-amatic text-3xl sm:text-4xl ${configTheme === 0 ? 'text-[#008b07]': 'text-[#c9ffc4]'}`}>Frontend,{' '}</span>
          <span className={`uppercase font-amatic text-3xl sm:text-4xl ${configTheme === 0 ? 'text-[#c11414]': 'text-[#ffe1e1]'}`}>Backend,{' '}</span>
          <span className={`uppercase font-amatic text-3xl sm:text-4xl ${configTheme === 0 ? 'text-[#0000ff]': 'text-[#d5e4ff]'}`}>FullStack,{' '}</span>
          <span className={`uppercase font-amatic text-3xl sm:text-4xl ${configTheme === 0 ? 'text-[#4f4f4f]': 'text-[#e7e7e7]'}`}>UX/UI</span>  projects and more.
        </p>
        <h2 className={`font-bowlby mt-auto flex row items-center gap-2 text-2xl sm:text-3xl lg:text-2xl xl:text-3xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} sm:justify-center pb-0 xs:pb-1 sm:pb-2`}>
          <IconsProyect fill={configTheme} />
          Projects:</h2>
          <p className={`font-bowlby flex items-center gap-2 text-3xl xs:text-5xl sm:text-6xl md:text-[5vw] lg:text-5xl xl:text-6xl  sm:justify-center lg:justify-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} pb-6 justify-center`}>
          100
        </p>

        <h2 className={`font-bowlby mt-auto flex row items-center gap-2 text-2xl sm:text-3xl lg:text-2xl xl:text-3xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} sm:justify-center pb-0 xs:pb-1 sm:pb-2`}>
          <IconsTechs fill={configTheme} />
          Technologies:
        </h2>
        <section className="flex w-full justify-center">
          <div className="pt-1 pb-6 flex flex-wrap gap-2 lg:gap-1 justify-evenly xs:max-w-[356px] sm:max-w-[610px] lg:min-w-[290px]">
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
          </div>
        </section>
       
        <h2 className={`font-bowlby mt-auto flex row items-center gap-2 text-2xl sm:text-3xl lg:text-2xl xl:text-3xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} sm:justify-center pb-0 xs:pb-1 sm:pb-2`}>
          <IconsSocial fill={configTheme} />
          Social media:
        </h2>
        <section className="pt-1 sm:pb-2 flex justify-center flex-wrap gap-2 items-center">
          <IconsInstagram isPrimary={configTheme} />
          <IconsTwitter isPrimary={configTheme}  />
          <IconsGithub isPrimary={configTheme}  />
          <IconsLinkedin isPrimary={configTheme}  />
          <IconsPage isPrimary={configTheme}  />
        </section>
      </aside>
  )
}
