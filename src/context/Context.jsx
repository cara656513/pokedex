import { createContext, useState } from "react";
import MOCK_DATA from "../data/data";

export const Context = createContext(null);

export const Provider = ({ children }) => {
  const [addedPokemons, setAddedPokemon] = useState([]);

  //추가
  const addPokemon = (e) => {
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

  const deletePokemon = (e) => {
    e.stopPropagation();

    let deletedData = addedPokemons.filter((data) => data.id !== +e.target.id);

    setAddedPokemon(deletedData);
  };

  return (
    <Context.Provider
      value={{
        addedPokemons,
        addPokemon,
        deletePokemon,
        MOCK_DATA,
      }}
    >
      {children}
    </Context.Provider>
  );
};
