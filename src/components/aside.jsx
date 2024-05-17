import { IconsGithub, IconsInstagram, IconsLinkedin, IconsPage, IconsPortfolio, IconsProyect, IconsSocial, IconsTechAngular, IconsTechAstro, IconsTechExpress, IconsTechFigma, IconsTechFirebase, IconsTechGo, IconsTechJavaScript, IconsTechJest, IconsTechNest, IconsTechNext, IconsTechNode, IconsTechPHP, IconsTechPlayWrite, IconsTechReact, IconsTechRedux, IconsTechRuby, IconsTechTailwind, IconsTechThreejs, IconsTechTypeScript, IconsTechVite, IconsTechVue, IconsTechs, IconsTwitter } from "../assets/Icons"
import "./aside.css";

import info from '../assets/projects.json'

export const Aside = ({theme,configTheme, selectTech, handletech }) => {
  return (
    <aside className={`scroll-hidden relative sm:relative lg:fixed overflow-y-scroll flex flex-col lg:h-full select-none ${configTheme === 0 ? 'bg-'+theme[1]: 'bg-'+theme[0]} p-6 sm:p-8 lg:w-[35%] xl:w-[410px]`}>
      {/* Title */}
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
        {/* Number of projects */}
        <h2 className={`font-bowlby mt-auto flex row items-center gap-2 text-2xl sm:text-3xl lg:text-2xl xl:text-3xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} sm:justify-center pb-0 xs:pb-1 sm:pb-2`}>
          <IconsProyect fill={configTheme} />
          Projects:</h2>
          <p className={`font-bowlby flex items-center gap-2 text-3xl xs:text-5xl sm:text-6xl md:text-[5vw] lg:text-5xl xl:text-6xl  sm:justify-center lg:justify-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} pb-6 justify-center`}>
          {info.projects.length}
        </p>
        {/* Technologies */}
        <h2 className={`font-bowlby mt-auto flex row items-center gap-2 text-2xl sm:text-3xl lg:text-2xl xl:text-3xl sm:text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'} sm:justify-center pb-0 xs:pb-1 sm:pb-2`}>
          <IconsTechs fill={configTheme} />
          Technologies:
        </h2>
        <section className="flex w-full justify-center">
          <div className="pt-1 pb-6 flex flex-wrap gap-2 lg:gap-1 justify-evenly xs:max-w-[356px] sm:max-w-[610px] lg:min-w-[290px]">
            <IconsTechVite isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechJavaScript isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechTypeScript isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechAstro isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechReact isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechRedux isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechNext isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechVue isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechAngular isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechNode isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechExpress isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechNest isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechFirebase isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechThreejs isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechTailwind isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechFigma isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechJest isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechPlayWrite isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechGo isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechRuby isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
            <IconsTechPHP isActive={selectTech} handletech={handletech} isPrimary={configTheme} />
          </div>
        </section>
       {/* Social Media */}
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
