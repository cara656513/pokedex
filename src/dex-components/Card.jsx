import { useNavigate } from "react-router-dom";
import { Button, StyledCard } from "../style/CardStyle";
import { useContext } from "react";
import { Context } from "../context/Context";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const { addPokemon } = useContext(Context);

  return (
    <StyledCard
      onClick={() => {
        navigate(`/detail/${data.id}`);
      }}
      key={data.id}
    >
      <div>
        <img src={data.img_url} />
        <h3>{data.korean_name}</h3>
        <p>no.{data.id}</p>
        <Button onClick={addPokemon} id={data.id}>
          추가
        </Button>
      </div>
    </StyledCard>
  );
};

export default Card;
