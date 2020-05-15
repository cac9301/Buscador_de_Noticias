import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from "axios";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  const [categoria, setcategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  //cada veaz que se haga la consulta

  useEffect(() => {
    const consultarApi = async () => {
      const apikey = `a2055298b93e42ab99e66cfafcdcc5d7`;
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${apikey}`;
      const resultado = await axios.get(url);
      guardarNoticias(resultado.data.articles);
    };
    consultarApi();
  }, [categoria]);
  return (
    <>
      <Header titulo="Buscador De Noticias" />
      <div className="container white">
        <Formulario setcategoria={setcategoria} />

        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
