import styled from "styled-components";
import MOCK_DATA from "../data/data";
import Card from "./Card";

const PocketmonList = ({ addPokemon, deletePokemon }) => {
  return (
    <>
      <Wrapper>
        {MOCK_DATA.map((data) => {
          return (
            <Card
              key={data.id}
              data={data}
              addPokemon={addPokemon}
              deletePokemon={deletePokemon}
              text={"추가"}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #d8d8d8;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export default PocketmonList;
