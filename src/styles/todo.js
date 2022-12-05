import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;

  > section {
    width: 40vw;
    height: 75vh;
    background-color: ${({theme}) => theme.bgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.boxShadow};
}
`;

export const ContainerButtons = styled.div`
  margin-top: 2rem;
  
  > input {
    padding: 10px 20px;
    border: none;
    background-color: ${({theme}) => theme.bgColorGradient};
    outline: none;
    border-radius: 5px;
    margin-right: 2rem;
    box-shadow: ${({theme}) => theme.boxShadow};
  }

  > button {
    min-width: 10rem;
    padding: 10px 20px;
    border: none;
    background: ${({theme}) => theme.inputBg};
    color: ${({theme}) => theme.primary};
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.boxShadow};
  }
`;

export const ListContainer = styled.div`
  min-height: 60vh;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 2rem auto;
    justify-content: space-between;
    border-bottom: 1px solid ${({theme}) => theme.primary};

    > p {
      font-size: 20px;
      text-transform: capitalize;
      color: ${({theme}) => theme.primary};
    }

    > div {
      width: 3.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        border: none;

        > svg {
        color: ${({theme}) => theme.primary};
        
        }
      }
    }
  }
`;

export const EmptyTasks = styled.div`
  margin-top: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({theme}) => theme.primary};
  text-align: center;

  svg {
    opacity: 0.3;
  }

  p {
    font-weight: 700;
  }
`;