export const Aside = ({theme,configTheme}) => {
  console.log('text-'+theme[configTheme]);
  return (
    <aside className={`relative ${configTheme === 0 ? 'bg-'+theme[1]: 'bg-'+theme[0]} p-6`}>
        <h1 className={`font-bowlby text-5xl text-center ${configTheme === 0 ? 'text-primary': 'text-secondary'}`}>Portfolio</h1>
        <h2 className={`xl:text-3xl text-${theme[configTheme]} font-paytone leading-5 text-xl`}>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.{" "}
        </h2>
      </aside>
  )
}
