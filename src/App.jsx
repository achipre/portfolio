import { Aside } from "./components/aside";
import { Theme } from "./components/theme";
import { useTheme } from "./hooks/theme";


function App() {
  const {configTheme, handleTheme, theme} = useTheme()
  return (
    <main className={`flex flex-col md:flex-row min-w-60 relative h-screen bg-${theme[configTheme]}`}>
      {/* Button Theme */}
      <Theme theme={theme} handleTheme={handleTheme} configTheme={configTheme}/>
      {/* Aside Left */}
      <Aside theme={theme} configTheme={configTheme}/>
      {/* Main */}
      <main className="relative w-full">
        <h2 className={`flex h-full justify-end gap-6 px-6 text-9xl ${configTheme === 0 ? 'text-secondary': 'text-primary'} justify-start font-bebas [writing-mode:_vertical-lr] flex-nowrap`}>
          <span className="title-animate absolute">Calculator</span> 
          <span className="title-animate2 absolute">Calculator</span> 
          </h2>
      </main>
    </main>
  );
}

export default App;
