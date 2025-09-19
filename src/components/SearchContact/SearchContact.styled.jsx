import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';

export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;

  & input {
    width: 260px;
    padding: 12px 10px 12px 26px;

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

  &:focus-within svg {
    color: #2196f3;
  }
`;

export const Icon = styled(IoMdSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: gray;
`;
