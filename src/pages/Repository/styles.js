import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 16px;
  }

  h1 {
    font-size: 24px;
    margin-top: 8px;
  }

  p {
    font-size: 16px;
    margin-top: 8px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
