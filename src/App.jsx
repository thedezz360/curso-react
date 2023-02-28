import { useEffect, useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    setImagen(document.getElementById("selectMeme").value);
  }, []);

  const onChangeLinea1 = (e) => {
    setLinea1(e.target.value);
  };

  const onChangeLinea2 = (e) => {
    setLinea2(e.target.value);
  };

  const onChangeImagen = (e) => {
    setImagen(e.target.value);
  };

  const onChangeExportar = () => {
    //convierte un elemento html en una imagen
    // eslint-disable-next-line no-undef
    html2canvas(document.querySelector(".contenedor-meme")).then(canvas => {
      //convertimos la imagen  en texto
      let img = canvas.toDataURL();
      let link = document.createElement('a');
      //el link descargara el archivo y lo llamara meme
      link.download = 'meme.jpg';
      link.href = img;
      link.click();
  });
  };

  return (
    <div className="App">
      {/* select picker de memes */}
      <select id="selectMeme" onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>

      {/* input text - primera linea */}
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" />

      {/* input text - segunda linea */}
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" />

      {/* boton exportar */}
      <button onClick={onChangeExportar}>Exportar</button>

      {/* meme */}
      <div className="contenedor-meme">
        <span className="texto-linea">{linea1}</span> <br />
        <span className="texto-linea2">{linea2}</span>
        <img className="img-meme" src={`./memes/${imagen}.jpg`} alt="meme" />
      </div>
    </div>
  );
}

export default App;
