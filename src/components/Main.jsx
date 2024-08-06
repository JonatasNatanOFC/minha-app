import Carousels from "./Carousels";
import itens from "./dataset/Carousel";

const Main = () => {
  let i = 0;
  // estudar o hook useState para atualizar de componente em tela
  const handleClick = (e) => {
    i = i + 1;
    console.log(i);
  };

  return (
    <main>
      <Carousels itens={itens} />

      <button onClick={handleClick}>Enviar</button>
      <p>{i}</p>
    </main>
  );
};

export default Main;
