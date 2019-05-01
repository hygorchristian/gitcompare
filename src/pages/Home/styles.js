import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    transition: all 200ms ease-in-out;

    &:hover {
      background: #52d89f;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
`;

export const Error = styled.span`
  height: 55px;
  border-radius: 3px;
  line-height: 55px;
  font-size: 20px;
  padding: 0 20px;
  background: #fe6e6e;
  font-weight: bold;
  color: white;
  margin-top: 20px;
`;
