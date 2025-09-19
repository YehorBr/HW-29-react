import styled from 'styled-components';

export const ContactsListStl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 20px;

  margin-top: 20px;
  margin-bottom: 20px;

  & li {
    flex: 0 1 calc(25% - 20px);
    box-sizing: border-box;

    padding: 25px 20px 10px 20px;

    border-radius: 15px;

    background-color: #fff;

    border: 1px solid #c3c3c3aa;

    border-radius: 10px;

    & div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    & h3 {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & p {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 10px;
    }

    & button {
      padding: 5px 100px;

      background-color: #eee;

      border-radius: 20px;

      margin-top: 10px;

      &:hover {
        background-color: #2196f3;
        color: #fff;
      }
    }
  }
`;
