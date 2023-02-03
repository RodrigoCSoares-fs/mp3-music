import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(2,0,36);
  background: linear-gradient(171deg, rgba(2,0,36,1) 0%, rgba(9,121,66,0.6769301470588236) 35%, rgba(0,212,255,1) 100%);


  .box {
    
    min-width: 60%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;


    h2 {
      margin-bottom: 1rem;
      text-align: center;
    }

    .buttons {

        display: flex;
        flex-direction:row;
        gap: 1rem;

      .button-element {
        padding: 1.5rem;
        border-radius: 50rem;
        background: #fff;
        border: none;
        box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.5);
        cursor: pointer;
        font-size: 1rem;
        transition: 0.5s;
        
      }

      .button-element:hover {
        box-shadow: none;
      }
    }
  }
`;
