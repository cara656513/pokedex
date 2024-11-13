import MyPocketmon from "../dex-components/MyPocketmon";
import PocketmonList from "../dex-components/PocketmonList";
import DexStyle from "../style/DexStyle";

const Dex = ({ addedPokemons, DeletePokemon, AddPokemon }) => {
  return (
    <>
      <DexStyle
        inside={
          <>
            <MyPocketmon
              addedPokemons={addedPokemons}
              deletePokemon={DeletePokemon}
            />
            <PocketmonList
              addPokemon={AddPokemon}
              deletePokemon={DeletePokemon}
            />
          </>
        }
      ></DexStyle>
    </>
  );
};

export default Dex;
