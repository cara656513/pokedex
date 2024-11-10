import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  height: 250px;
  width: 180px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  margin: 20px;

  &:hover {
    background-color: #0000005a;
  }
`;

export const Button = styled.button`
  background-color: red;
  border: transparent;
  width: 50px;
  height: 25px;
  border-radius: 5px;
  font-size: 15px;
  color: white;
`;
