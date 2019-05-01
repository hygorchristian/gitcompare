import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 50px;
  flex-direction: row;
  width: 90%;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;
      color: #444;

      i {
        width: 30px;
      }

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
        margin-left: 3px;
      }

      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }
`;
