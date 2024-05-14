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
      <main className="relative">
      </main>
    </main>
  );
}

export default App;
