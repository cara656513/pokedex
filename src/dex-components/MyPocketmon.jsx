import styled from "styled-components";
import { Button, StyledCard } from "../style/CardStyle";

const MyPocketmon = ({ addedPokemons, deletePokemon }) => {
  return (
    <>
      <Wrapper>
        <h1>나만의 포켓몬</h1>

        <CardWrapper>
          {addedPokemons.map((data) => {
            return (
              <AddedCard
                key={data.id}
                data={data}
                deletePokemon={deletePokemon}
              />
            );
          })}
          {Array(6 - addedPokemons.length)
            .fill(true)
            .map((data, idx) => {
              return <EmptyCard key={idx} />;
            })}
        </CardWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #f2f2f2;
  min-width: 1300px;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const StyledBallCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 3px dashed #bdbdbd;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyCard = () => {
  return (
    <>
      <StyledBallCard>
        <img
          style={{
            width: "50px",
          }}
          src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
        ></img>
      </StyledBallCard>
    </>
  );
};

const AddedCard = ({ data, deletePokemon }) => {
  return (
    <StyledCard>
      <div>
        <img src={data.img_url} />
        <h3>{data.korean_name}</h3>
        <p>no.{data.id}</p>
        <Button onClick={deletePokemon} id={data.id}>
          제거
        </Button>
      </div>
    </StyledCard>
  );
};

export default MyPocketmon;
