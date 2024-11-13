import styled from "styled-components";
import Card from "./Card";
import { useContext } from "react";
import { Context } from "../context/Context";

const PocketmonList = () => {
  const { MOCK_DATA } = useContext(Context);

  return (
    <>
      <Wrapper>
        {MOCK_DATA.map((data) => {
          return <Card key={data.id} data={data} text={"추가"} />;
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
