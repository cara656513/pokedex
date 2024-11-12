import MyPocketmon from "../dex-components/MyPocketmon";
import PocketmonList from "../dex-components/PocketmonList";
import DexStyle from "../style/DexStyle";

const Dex = () => {
  return (
    <>
      <DexStyle
        inside={
          <>
            <MyPocketmon />
            <PocketmonList />
          </>
        }
      ></DexStyle>
    </>
  );
};

export default Dex;
