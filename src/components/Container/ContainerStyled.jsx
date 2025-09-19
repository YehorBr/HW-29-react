import styled from "styled-components";

export const ContainerStyled = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-width: 1200px; 
  margin-left: auto;
  margin-right: auto;

  text-align: center;
  padding: 10px 15px;

  @media screen and (max-width: 767px) {
    max-width: 435px;
    padding: 0 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;