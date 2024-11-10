import { useNavigate } from "react-router-dom";
import StyledHome from "../style/HomeStyle";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledHome
        src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
        route={() => {
          navigate("/dex");
        }}
        text="포켓몬 도감 시작하기"
      ></StyledHome>
    </>
  );
};

export default Home;
