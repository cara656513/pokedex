import MOCK_DATA from "../data/data";
import MyPocketmon from "../dex-components/MyPocketmon";
import PocketmonList from "../dex-components/PocketmonList";
import DexStyle from "../style/DexStyle";
import { useState } from "react";
import { Context } from "../context/Context";

const Dex = () => {
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
    <>
      <Context.Provider
        value={{
          addedPokemons,
          deletePokemon: DeletePokemon,
          addPokemon: AddPokemon,
          MOCK_DATA,
        }}
      >
        <DexStyle
          inside={
            <>
              <MyPocketmon />
              <PocketmonList />
            </>
          }
        ></DexStyle>
      </Context.Provider>
    </>
  );
};

export default Dex;
