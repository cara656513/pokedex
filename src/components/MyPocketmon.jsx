import styled from "styled-components";

const MyPocketmon = () => {
  return (
    <>
      <Wrapper>
        <h1>나만의 포켓몬</h1>
        <CardWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #f2f2f2;
  width: 1200px;
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

const StyledCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 3px dashed #bdbdbd;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = () => {
  return (
    <>
      <StyledCard>
        <img
          style={{
            width: "50px",
          }}
          src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
        ></img>
      </StyledCard>
    </>
  );
};

export default MyPocketmon;
