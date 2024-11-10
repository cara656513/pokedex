import { useNavigate, useParams } from "react-router-dom";
import DetailStyle from "../style/DetailStyle";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <DetailStyle
        toDex={() => {
          navigate("/dex");
        }}
        id={id}
      />
    </div>
  );
};

export default Detail;
