import { Aside } from "./components/aside";
import { Theme } from "./components/theme";
import { useTheme } from "./hooks/theme";

function App() {
  const {configTheme, handleTheme, theme} = useTheme()
  configTheme === 0 ? document.body.className = 'bg-primary' : document.body.className = 'bg-secondary' 
  
  return (
    <main className={`relative flex flex-col md:flex-row w-full min-w-72 min-h-[832px] h-screen bg-${theme[configTheme]}`}>
      {/* Button Theme */}
      <Theme theme={theme} handleTheme={handleTheme} configTheme={configTheme} />
      {/* Aside Left */}
      <Aside theme={theme} configTheme={configTheme} />
      {/* Main */}
      <main className="relative lg:fixed lg:w-[65%] xl:w-[calc(100%_-_410px)] flex ml-auto ">
        {/* <TitleProyect configTheme={configTheme}/>
        <img className="md:absolute object-cover aspect-square md:object-cover w-full h-full" src="tictactoe.jpg" alt="Calculadora" /> */}
      </main>
    </main>
  );
}

export default App;
