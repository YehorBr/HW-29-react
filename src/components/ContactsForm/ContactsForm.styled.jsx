import styled from 'styled-components';


export const Backcdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 4;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  position: relative;

  width: 400px;

  margin-left: auto;
  margin-right: auto;

  background-color: #fff;
  border: 2px solid #eee;
  border-radius: 10px;

  z-index: 5;

  padding: 100px 40px;

  & h2 {
    text-align: center;
    margin-bottom: 35px;
  }
  
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;


    display: flex;
    align-items: center;

    background: none;

    padding: 5px;

    border-radius: 50px;
    border: 1px solid #eee;

    &:hover{
      color: #eee;
    }

`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  & input {
    padding: 12px 10px;

    border: 2px solid #eee;

    border-radius: 50px;
  }

  & input:focus {
    outline: none;
    border: 2px solid #2196f3;
  }

  & input:focus::placeholder {
    color: #2196f3;
  }

  & button {
    width: 200px;

    padding: 10px 20px;

    border-radius: 10px;

    margin-left: auto;
    margin-right: auto;
  }

  & button:hover {
    color: #fff;

  }
`;
