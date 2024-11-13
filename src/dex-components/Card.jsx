import { useNavigate } from "react-router-dom";
import { Button, StyledCard } from "../style/CardStyle";

const Card = ({ data, addPokemon, text, deletePokemon }) => {
  const navigate = useNavigate();

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
        <Button
          onClick={text === "추가" ? addPokemon : deletePokemon}
          id={data.id}
        >
          {text}
        </Button>
      </div>
    </StyledCard>
  );
};

export default Card;
