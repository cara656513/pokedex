import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

function StyledHome(props) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Logo src={props.src}></Logo>
        <Button onClick={props.route}>{props.text}</Button>
      </Wrapper>
    </>
  );
}

const Button = styled.button`
  background-color: red;
  border: transparent;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  color: white;
`;

const Logo = styled.img`
  width: 500px;
  margin: 50px;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default StyledHome;
