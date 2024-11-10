import styled from "styled-components";
import { Button } from "./CardStyle";
import MOCK_DATA from "../data/data";

const DetailStyle = ({ toDex, id }) => {
  const clickedOne = MOCK_DATA.find((data) => data.id == id);
  return (
    <Wrapper>
      <img src={clickedOne.img_url}></img>
      <h1>{clickedOne.korean_name}</h1>
      <h2>타입: {clickedOne.types.join(", ")}</h2>
      <p>{clickedOne.description}</p>
      <Button onClick={toDex}>뒤로</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default DetailStyle;
