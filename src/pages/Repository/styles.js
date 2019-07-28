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

export const IssueList = styled.ul`
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 16px 8px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 8px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 16px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }
      }

      p {
        margin-top: 8px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
