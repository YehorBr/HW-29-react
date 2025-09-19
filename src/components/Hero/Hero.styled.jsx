import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
`;

export const BgImg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;

  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const HeroTextContainer = styled.div`
  color: #eee;

  padding: 220px 0;

  & h1 {
    font-size: 36px;
  }

  & p {
    font-size: 18px;
    margin-top: 5px;
  }

  & button {
    color: #eee;
    background-color: #2196f3;
    font-size: 14px;

    margin-top: 35px;
    padding: 10px 35px;

    border-radius: 10px;
  }

  & button:hover {
    color: #dadada;
    background-color: #0076d6;
  }
`;
