import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>detail</h1>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Detail;
