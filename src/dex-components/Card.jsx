import { useNavigate } from "react-router-dom";
import { Button, StyledCard } from "../style/CardStyle";

const Card = ({ data, addPokemon }) => {
  const navigate = useNavigate();

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
        <Button onClick={addPokemon} id={data.id}>
          추가
        </Button>
      </div>
    </StyledCard>
  );
};

export default Card;
