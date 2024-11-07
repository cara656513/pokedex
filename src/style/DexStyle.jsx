import styled from "styled-components";

function DexStyle(props) {
  return <Wrapper>{props.inside}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default DexStyle;
