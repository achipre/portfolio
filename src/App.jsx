import { Aside } from "./components/aside";
import { Theme } from "./components/theme";
import { TitleProyect } from "./components/title";
import { useTheme } from "./hooks/theme";

function App() {
  const {configTheme, handleTheme, theme} = useTheme()
  return (
    <main className={`flex flex-col md:flex-row min-w-72 min-h-[832px] relative h-screen bg-${theme[configTheme]}`}>
      {/* Button Theme */}
      <Theme theme={theme} handleTheme={handleTheme} configTheme={configTheme}/>
      {/* Aside Left */}
      <Aside theme={theme} configTheme={configTheme}/>
      {/* Main */}
      <main className="relative w-full flex">
        <TitleProyect configTheme={configTheme}/>
        <img className="md:absolute object-cover aspect-square md:object-cover w-full h-full" src="tictactoe.jpg" alt="Calculadora" />
      </main>
    </main>
  );
}

export default App;
