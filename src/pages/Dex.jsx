import MyPocketmon from "../components/MyPocketmon";
import PocketmonList from "../components/PocketmonList";
import DexStyle from "../style/DexStyle";

const Dex = () => {
  return (
    <>
      <DexStyle
        inside={
          <>
            <MyPocketmon></MyPocketmon>
            <PocketmonList></PocketmonList>
          </>
        }
      ></DexStyle>
    </>
  );
};

export default Dex;
