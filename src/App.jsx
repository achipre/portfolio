import Clock from "./components/clock";
import Header from "./components/header";
import { Theme } from "./components/theme";
import { useTheme } from "./hooks/theme";


function App() {
  const {configTheme, handleTheme, theme} = useTheme()
  return (
    <main className={`flex flex-col md:flex-row relative h-screen bg-${theme[configTheme]}`}>
      <Theme theme={theme} handleTheme={handleTheme} configTheme={configTheme}/>
      <Header />
      <Clock />
      <aside className={`relative bg-${configTheme == 0 ? theme[1]: theme[0]} p-6`}>
        <h1 className={`font-primary text-5xl text-center text-${theme[configTheme]}`}>Portfolio</h1>
        <h2 className={`xl:text-3xl text-${theme[configTheme]} font-secondary leading-5 text-xl`}>
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
      <main className="relative">
      </main>
    </main>
  );
}

export default App;
