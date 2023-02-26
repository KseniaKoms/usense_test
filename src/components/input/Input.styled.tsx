import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  li {
    width: 80px;
    height: 20px;

    background-color: lightgrey;
    border-radius: 5px;
  }
`;
