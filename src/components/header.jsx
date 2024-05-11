import { useState } from "react";

const arrayTheme = ["blue", "gray", "green", "pink"];

function Header() {
  const [aleatory, setAleatory] = useState(1);
  const random = () => {
    const aleatoryIndex = Math.floor(Math.random() * arrayTheme.length);
    return aleatoryIndex;
  };
  const changeTheme = () => {
    setAleatory((prev) => {
      console.log(prev);
      const numberAleatory = random();
      if (prev === numberAleatory) changeTheme();
      return numberAleatory;
    });
  };
  return (
    <nav>
      <button
        className="text-red-600 absolute top-0 right-0"
        onClick={changeTheme}
      >
        {arrayTheme[aleatory]}
      </button>
    </nav>
  );
}

export default Header;
