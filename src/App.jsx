import Clock from "./components/clock";
import Header from "./components/header";

function App() {
  return (
    <main className="flex flex-col md:flex-row bg-[#000] relative h-screen">
      <Header />
      <Clock />
      <aside className="bg-[#413326] md:min-w-64 md:w-[30%] xl:p-8 text-gray-400">
        <h2 className="xl:text-3xl">
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
      <main></main>
    </main>
  );
}

export default App;
