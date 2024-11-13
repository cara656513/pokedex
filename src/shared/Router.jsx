import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
import { useState } from "react";
import MOCK_DATA from "../data/data";

const Router = () => {
  const [addedPokemons, setAddedPokemon] = useState([]);

  //추가
  const AddPokemon = (e) => {
    e.stopPropagation();

    let selectedOne = {
      ...MOCK_DATA.find((data) => data.id === +e.target.id),
    };

    if (addedPokemons.length === 6) {
      alert("포켓볼이 부족합니다.");
    } else if (addedPokemons.map((data) => data.id).includes(+e.target.id)) {
      alert("이미 보유한 포켓몬입니다.");
    } else {
      setAddedPokemon([...addedPokemons, selectedOne]);
    }
  };

  const DeletePokemon = (e) => {
    e.stopPropagation();

    let deletedData = addedPokemons.filter((data) => data.id !== +e.target.id);

    setAddedPokemon(deletedData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex"
          element={
            <Dex
              addedPokemons={addedPokemons}
              DeletePokemon={DeletePokemon}
              AddPokemon={AddPokemon}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
