import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/data";

const PocketmonList = () => {
  return (
    <>
      <Wrapper>
        {MOCK_DATA.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #d8d8d8;
  width: 1200px;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const StyledCard = styled.div`
  background-color: white;
  height: 250px;
  width: 180px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  margin: 20px;

  &:hover {
    background-color: #0000005a;
  }
`;

const Button = styled.button`
  background-color: red;
  border: transparent;
  width: 50px;
  height: 25px;
  border-radius: 5px;
  font-size: 15px;
  color: white;
`;

const Card = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);
  return (
    <StyledCard
      onClick={() => {
        navigate("/detail");
      }}
      key={data.id}
    >
      <div>
        <img src={data.img_url} />
        <h3>{data.korean_name}</h3>
        <p>no.{data.id}</p>
        <Button>추가</Button>
      </div>
    </StyledCard>
  );
};

export default PocketmonList;
