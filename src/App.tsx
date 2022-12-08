import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [nomes, setNomes] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNome = () => {
    setNomes((state) => {
      state.push(inputRef.current!.value);
      inputRef.current!.value = "";
      return [...state];
    });
  };

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <div>
        <button onClick={() => adicionarNome()}>Adicionar</button>
      </div>
      <div>
        Lista de nomes:
        <ul>
          {nomes.map((nome: string, index: number) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
